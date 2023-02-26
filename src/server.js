const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'taskdatabase'
});

// connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

// define routes for CRUD operations on Task table
app.get('/tasks', (req, res) => {
  const sql = 'SELECT * FROM Task';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.post('/tasks', (req, res) => {
  const { text, day} = req.body;
  const sql = 'INSERT INTO Task (text, day) VALUES (?, ?)';
  db.query(sql, [text, day], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.put('/tasks/:id', (req, res) => {
  const id = req.params.id;
  const { text, day } = req.body;
  const sql = 'UPDATE Task SET text = ?, day = ? WHERE id = ?';
  db.query(sql, [text, day_, id], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.delete('/tasks/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM Task WHERE id = ?';
  db.query(sql, id, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
