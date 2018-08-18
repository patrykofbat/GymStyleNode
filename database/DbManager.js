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

    executeQuery = (sql) => {
        this.conn.query(sql,(err, rows, fields)=>{
            console.log(rows);
        })

    }

}