import crypto from "crypto";

export default class User{


    constructor({login, password, email}){
        this.login = login;
        this.password = password;
        this.email = email;
    }

    parseIntoInsertQuery(tableName){
        let password = crypto.createHash('sha256').update(this.password).digest('hex');
        return `INSERT INTO ${tableName} (login, password, email) 
            VALUES ('${this.login}', '${password}', '${this.email}')`;
    }

    parseIntoSelectByLogin(tableName){
        return `SELECT * FROM ${tableName} WHERE login='${this.login}'`;
    }
}