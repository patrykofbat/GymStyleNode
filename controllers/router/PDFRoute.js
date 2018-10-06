import express from "express";


let router  = express.Router();

router.post("/", (req, res) => {
    console.log("route working");
    console.log(req);

});

export default router;
