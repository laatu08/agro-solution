const {pool} = require('../model/user.model.js');

// Get authenticated user info
const getUserData = async (req, res) => {
  try {
    const userId = req.user.id; // Set by authMiddleware

    const result = await pool.query(
      'SELECT id, name, email, phone_no, address FROM users WHERE id = $1',
      [userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ user: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getUserData };
