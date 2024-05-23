const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Sử dụng CORS middleware
app.use(cors());

// Tạo kết nối đến cơ sở dữ liệu
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '149162536',
    database: 'QuanLySinhVien'
});

// Kết nối đến cơ sở dữ liệu
connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

// Route để lấy tất cả dữ liệu từ bảng monhoc bằng stored procedure
app.get('/api/monhoc', (req, res) => {
    const query = 'CALL getAllMonHoc()';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Error fetching data');
            return;
        }

        // Gửi kết quả dưới dạng JSON
        res.json(results[0]);
    });
});

// Route để lấy tất cả dữ liệu từ bảng lop bằng stored procedure
app.get('/api/lop', (req, res) => {
    const query = 'CALL getAllLop()';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Error fetching data');
            return;
        }

        // Gửi kết quả dưới dạng JSON
        res.json(results[0]);
    });
});

// Khởi động máy chủ
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
