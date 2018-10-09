import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import ExportRoute from "./controllers/router/ExportRoute";
import ExerciseRoute from "./controllers/router/ExercisesRoute";
import PDFRoute from "./controllers/router/PDFRoute";



let app = express();

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static('assets/pdf'));

app.use("/export", ExportRoute);
app.use("/exercises", ExerciseRoute);
app.use("/PDF", PDFRoute);

app.listen(8081, () => {
    console.log("Server running on 127.0.0.1");
});



