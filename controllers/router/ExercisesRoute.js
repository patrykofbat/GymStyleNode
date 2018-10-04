import express from "express";
import ExerciseImporter from "../../database/ExerciseImporter";


let router = express.Router();

router.get("/:id", async (req, res)=>{
    let importer = new ExerciseImporter("localhost", "root", "gymstyle");
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
    

})





export default router;