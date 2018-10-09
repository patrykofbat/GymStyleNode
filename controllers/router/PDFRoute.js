import express from "express";
import PDFDocument from "pdfkit";
import fs from "fs";


let router  = express.Router();

router.post("/", (req, res) => {
    let doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(`./assets/pdf/${req.body[0].nameOfTraining}.pdf`));
    doc.font('./assets/fonts/Anonymous_Pro.ttf');

    doc.text("Nodeżó js pdf", 100, 100);
    doc.end();

    res.json({link: `http://localhost:8081/${req.body[0].nameOfTraining}.pdf`});

});

export default router;
