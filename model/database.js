require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "hours",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = "DROP TABLE if exists schedule; CREATE TABLE schedule(id INT NOT NULL AUTO_INCREMENT, week INT not null, employee VARCHAR(40) not null, start VARCHAR(20) not null, finish VARCHAR(20) not null, hour DECIMAL(19, 2) not null, day VARCHAR(40) not null, date DATE not null, PRIMARY KEY (id));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `schedule` was successful!");

    console.log("Closing...");
  });

  con.end();
});


