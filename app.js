import express from "express";
import cors from "cors";
import mysql from "mysql";
import Exercise from "./models/Exercise";
import fs from "fs";
import dbManager from "./database/dbManager";
import bodyParser from "body-parser";
import ExportRoute from "./controllers/router/ExportRoute";
import ExerciseRoute from "./controllers/router/ExercisesRoute";



let app = express();

app.use(cors());
app.use(bodyParser());

app.use("/export", ExportRoute);
app.use("/exercises", ExerciseRoute);

app.listen(8081, () => {
    console.log("Server running on 127.0.0.1");
})



