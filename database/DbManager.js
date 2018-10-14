import mysql from "mysql";

export default class DbManager {

    constructor(credentials){
        console.log(credentials);
        this.conn = mysql.createConnection(credentials);
        this.conn.connect(function (err) {
            if(err){
                throw err;
            }
            console.log("Connected");

        });
    }

    executeQuery = (sql, handler) => {
        this.conn.query(sql, handler);
        
    }

}