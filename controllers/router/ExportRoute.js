import express from "express";
import Exporter from "../../database/Exporter"

let router = express.Router();

router.get("/:table/:id", (req, res)=>{
    let exporter = new Exporter("localhost", "root", "gymstyle");
    exporter.fromFile("./assets/" + req.params.table + ".txt", req.params.table, req.params.id);
    res.json(req.params);

})

export default router;