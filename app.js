import express from "express";
import cors from "cors";
import mysql from "mysql";
import Exercise from "./models/Exercise";
import fs from "fs";
import dbManager from "./database/dbManager";
import bodyParser from "body-parser";
import exporter from "./controllers/router/exporter";


let app = express();

app.use(cors());
app.use(bodyParser());

app.use("/export", exporter);

app.listen(8081, () => {
    console.log("Server running on 127.0.0.1");
})

let exercise = new Exercise(100, "siemka", "elo");
console.log(exercise.parseInsertQuery("gymstyle"));

// fs.readFile("./assets/chest.txt","utf8", (err, content)=>{
//     console.log(content);
// });

let db = new dbManager("localhost", "root", "gymstyle");
db.executeQuery("show tables");

