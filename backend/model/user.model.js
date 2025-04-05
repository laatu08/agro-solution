const {pool} = require("../db.js") 

const createTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone_no VARCHAR(15) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    address TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

  try {
    await pool.query(query);
    console.log("✅ User table is ready!");
  } catch (err) {
    console.error("❌ Error creating user table:", err);
  }
};

createTable();

module.exports={pool}
