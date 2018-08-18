import fs from "fs";
import DbManager from "../database/DbManager"
import os from "os";
import Exercise from "../models/Exercise";



export default class Exporter {

    constructor(host, user, database, password){
        this.db = new DbManager(host, user, database, password);
    }

    fromFile = (file, table, id) =>{
        fs.readFile(file ,"utf8", (err, content)=>{
            let records = content.split(os.EOL)
            records.forEach((item)=>{
                let itemPrim = item.split(",");
                let exercise = new Exercise(id, itemPrim[0], itemPrim[1]);
                //this.db.executeQuery(exercise.parseInsertQuery(table));
                id++;

            })
        });
    }
}
