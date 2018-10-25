import mysql from "mysql";

export default class DbManager {
  constructor(credentials) {
    this.credentials = credentials;
  }

  executeQuery = (sql, handler) => {
    this.conn = mysql.createConnection(this.credentials);
    this.conn.connect(function(err) {
      if (err) {
        throw err;
      }
      console.log("Connected");
    });
    this.conn.query(sql, handler);
    this.conn.end();
  };

  executeQueryAsync = sql => {
    return new Promise((resolve, reject) => {
      this.conn = mysql.createConnection(this.credentials);
      this.conn.connect(function(err) {
        if (err) {
          throw err;
        }
        console.log("Connected");
      });
      this.conn.query(sql, (err, rows) => {
        if (rows === undefined) {
          reject(new Error("Error: rows is undefined"));
        } else {
          resolve(rows);
        }
      });
    });
  };
}
