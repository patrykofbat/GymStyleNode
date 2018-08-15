import express from "express";
import cors from "cors";
import mysql from "mysql";

let app = express();

app.use(cors());

app.listen(8081, () => {
    console.log("Server running on 127.0.0.1");
})

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database : 'gymstyle'
});

conn.connect();

conn.query("show tables", (err, rows, fields)=>{
    console.log(rows);
});