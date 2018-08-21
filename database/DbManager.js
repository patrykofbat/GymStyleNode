import mysql from "mysql";

export default class DbManager {

    constructor(host,user,database,password){
        this.credentials = {
            host,
            user,
            database,
            password
        };
        this.conn = mysql.createConnection(this.credentials);
        this.conn.connect();
    }

    executeQuery = (sql, dataHandler) => {
        this.conn.query(sql, dataHandler);
        
    }

}