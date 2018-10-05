import express from "express";
import Exporter from "../../database/Exporter"
import dotenv from 'dotenv';

dotenv.config();

let router = express.Router();

router.get("/:table/:id", (req, res)=>{
    let exporter = new Exporter({
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASS
    });
    exporter.fromFile("./assets/" + req.params.table + ".txt", req.params.table, req.params.id);
    res.json(req.params);

});

export default router;