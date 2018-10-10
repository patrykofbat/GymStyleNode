import express from "express";
import PDFDocument from "pdfkit";
import fs from "fs";


let router  = express.Router();

router.post("/", (req, res) => {
    const {nameOfTraining, exercises} = req.body[0];
    let y = 100;

    let doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(`./assets/pdf/${nameOfTraining}.pdf`));
    doc.font('./assets/fonts/Anonymous_Pro.ttf');
    doc.text("Ćwiczenie", 70, 70);
    doc.text("Serie", 360, 70);
    doc.text("Powtórzenia", 410, 70);
    doc.text("Tempo", 500, 70);


    exercises.forEach((element, index)=>{
        const {content, series, tempo, reps} = element;
        doc.fontSize(8);
        doc.text((index+1) + "." + content , 70, y);
        doc.text(series, 360, y);
        doc.text(reps, 410, y);
        doc.text(tempo, 500, y);
        y+=20;

    });
    doc.end();

    res.json({link: `http://localhost:8081/${nameOfTraining}.pdf`});

});

export default router;
