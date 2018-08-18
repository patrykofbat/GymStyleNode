export default class Exercise {

    constructor(id, title, link, img="none"){
        this.id = id;
        this.title = title;
        this.link = link;
        this.img = img;
    };


    parseInsertQuery = (tableName) =>{
        return `insert into ${tableName} (id, title, link, img) values (${this.id}, '${this.title}', '${this.link}', '${this.img}')`;
    };
}