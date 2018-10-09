import mysql from "mysql";

export default class DbManager {

    constructor(credentials){
        console.log(credentials);
        this.conn = mysql.createConnection(credentials);
        this.conn.connect();
    }

    executeQuery = (sql, dataHandler) => {
        this.conn.query(sql, dataHandler);
        
    }

}