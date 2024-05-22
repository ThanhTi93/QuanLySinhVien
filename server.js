const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Sử dụng CORS middleware
app.use(cors());

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '149162536',
    database: 'QuanLySinhVien'
});

// Connect to the database
connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

// Route to fetch all data using the stored procedure
app.get('/api/monhoc', (req, res) => {
    const query = 'CALL getAllMonHoc()';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Error fetching data');
            return;
        }

        // Send the results as the response
        res.json(results[0]);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
