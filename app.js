import express from "express";
import cors from "cors";
import mysql from "mysql";
import Exercise from "./models/Exercise";
import fs from "fs";
import dbManager from "./database/dbManager";


let app = express();

app.use(cors());

app.listen(8081, () => {
    console.log("Server running on 127.0.0.1");
})

let exercise = new Exercise(100, "siemka", "elo");
console.log(exercise.parseInsertQuery("gymstyle"));

fs.readFile("./assets/chest.txt","utf8", (err, content)=>{
    console.log(content);
});
console.log("siemka")

let db = new dbManager("localhost", "root", "gymstyle");
db.executeQuery("show tables");

// let conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database : 'gymstyle'
// });

// conn.connect();

// conn.query("show tables", (err, rows, fields)=>{
//     console.log(rows);
// });