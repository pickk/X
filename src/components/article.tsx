require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


app.get('/api/article', (req, res) => {
    connection.query('SELECT title, content FROM articles LIMIT 1', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results[0]);
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));