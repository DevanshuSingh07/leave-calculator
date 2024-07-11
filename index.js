const express = require("express");
const mysql = require("mysql2");

// Create connection to MySQL database
const connection = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12719187",
  password: "v4RUBhGlQ5",
  database: "sql12719187",
});

const app = express();
const port = 3000;

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

//Example API endpoint to fetch data
app.get("/api", (req, res) => {
  const value = req.header("need");
  const sql = `SELECT days FROM records WHERE Mcondition = '${value}';`;
  console.log(sql);
  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
module.export = app;
