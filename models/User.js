
export default class User{


    constructor(login, password, email){
        this.login = login;
        this.password = password;
        this.email = email;
    }

    parseIntoInsertQuery(tableName){
        return `INSERT INTO ${tableName} (login, password, email) 
            VALUES ('${this.login}', '${this.password}', '${this.email}')`;
    }

    parseIntoSelectByLogin(tableName){
        return `SELECT * FROM ${tableName} WHERE login='${this.login}'`;
    }
}