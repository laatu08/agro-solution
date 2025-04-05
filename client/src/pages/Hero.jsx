import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Hero() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  const tips = [
    "🌱 Test your soil regularly to know the right crop for your land.",
    "💧 Irrigate early in the morning or late in the evening to reduce water loss.",
    "🐞 Use natural pest control methods to protect your crops sustainably.",
    "☀️ Monitor weather forecasts to plan sowing and harvesting efficiently.",
    "🌾 Rotate your crops to maintain healthy soil and increase yield.",
  ];

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const token = localStorage.getItem("token"); // Get the token from localStorage
        console.log(token);

        const res = await axios.get("http://localhost:5000/api/weather", {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token here
          },
        });

        const data = res.data;

        setWeatherData({
          location: data.location || data.weather?.name,
          temperature: `${data.weather?.main?.temp || "?"}°C`,
          condition: data.weather?.weather?.[0]?.main || "N/A",
          humidity: `${data.weather?.main?.humidity || "?"}%`,
          wind: `${data.weather?.wind?.speed || "?"} km/h`,
        });
      } catch (err) {
        console.error("Error fetching weather:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Weather Section */}
      <section className="bg-gradient-to-r from-green-600 to-lime-500 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Today's Weather</h1>

          {loading ? (
            <p className="text-lg">Loading weather data...</p>
          ) : weatherData ? (
            <>
              <p className="text-lg">{weatherData.location}</p>
              <div className="mt-6 flex justify-center gap-8 flex-wrap">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl shadow">
                  <p className="text-lg font-semibold">🌡️ Temp</p>
                  <p className="text-xl">{weatherData.temperature}</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl shadow">
                  <p className="text-lg font-semibold">⛅ Condition</p>
                  <p className="text-xl">{weatherData.condition}</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl shadow">
                  <p className="text-lg font-semibold">💧 Humidity</p>
                  <p className="text-xl">{weatherData.humidity}</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl shadow">
                  <p className="text-lg font-semibold">🌬️ Wind</p>
                  <p className="text-xl">{weatherData.wind}</p>
                </div>
              </div>
            </>
          ) : (
            <p className="text-lg text-red-200">Failed to load weather data.</p>
          )}
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-green-700 mb-8 text-center">
            Helpful Tips for Farmers 🌾
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <li
                key={index}
                className="bg-green-50 border border-green-200 p-5 rounded-xl shadow-sm hover:shadow-md transition"
              >
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
