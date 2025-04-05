const {pool} = require('../model/user.model.js');
const axios = require('axios');

const getWeatherByAddress = async (req, res) => {
  const userId = req.user.id;
  const API_KEY = process.env.OPENWEATHER_API_KEY;

  try {
    console.log("🔍 Getting address for user:", userId);
    const result = await pool.query('SELECT address FROM users WHERE id = $1', [userId]);

    if (result.rows.length === 0) {
      console.log("❌ User not found");
      return res.status(404).json({ message: 'User not found' });
    }

    const address = result.rows[0].address;
    console.log("📍 User address:", address);

    const geoRes = await axios.get(`https://api.openweathermap.org/geo/1.0/direct`, {
      params: {
        q: address,
        limit: 1,
        appid: API_KEY
      }
    });

    console.log("🌐 Geo data:", geoRes.data);

    if (!geoRes.data.length) {
      console.log("❌ No coordinates found for address");
      return res.status(404).json({ message: 'Location not found' });
    }

    const { lat, lon } = geoRes.data[0];
    console.log("📌 Coordinates:", lat, lon);

    const weatherRes = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: 'metric'
      }
    });

    console.log("☁️ Weather data:", weatherRes.data);

    res.status(200).json({
      location: address,
      weather: weatherRes.data
    });

  } catch (err) {
    console.error("🔥 Error occurred:", err.message);
    res.status(500).json({ message: 'Failed to fetch weather data' });
  }
};

module.exports = { getWeatherByAddress };
