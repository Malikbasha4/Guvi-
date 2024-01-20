// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: 'DESKTOP-SAVPTS8',
  user: 'desktop-savpts8\admin',
  password: '',
  database: 'mysql2',
});

db.connect();

// API endpoints for signup, login, and profile update

app.post('/signup', (req, res) => {
  // Implement signup logic
});

app.post('/login', (req, res) => {
  // Implement login logic
});

app.post('/updateProfile', (req, res) => {
  // Implement profile update logic
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
