import mysql from "mysql";

export default class DbManager {

    constructor(credentials){
        this.conn = mysql.createConnection(credentials);
        this.conn.connect();
    }

    executeQuery = (sql, dataHandler) => {
        this.conn.query(sql, dataHandler);
        
    }

}