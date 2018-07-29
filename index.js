import express from "express";
import cors from "cors";

let app = express();

app.use(cors());


app.listen(8081, () => {
    console.log("Server running on 127.0.0.1");
})


app.post("/registration", (req, res, next) => {
    console.log("i m here");
    res.json({ msg: "elo" });
    next();
});