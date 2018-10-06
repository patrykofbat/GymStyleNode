import express from "express";
import ExerciseImporter from "../../database/ExerciseImporter";
import dotenv from "dotenv";


let router = express.Router();
dotenv.config();

router.get("/:id", (req, res)=>{
    let importer = new ExerciseImporter({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASS
    });
    let table;
    switch(req.params.id){
        case "1000":
            table = "chest";
            break;
        case "2000":
            table = "back";
            break;
        case "3000":
            table = "legs";
            break;

    }
    console.log(req.params.id);
    importer.importExercises(table, (err, rows, fields)=>{
        res.json(rows);
    });
    

});





export default router;