import DbManager from "../database/DbManager";


export default class ExerciseImporter{

    constructor(host, user, database, password){
        this.db = new DbManager(host, user, database, password);
    }

    importExercises = (table, dataHandler) =>{
        this.db.executeQuery("SELECT * FROM " + table, dataHandler);
    }




}