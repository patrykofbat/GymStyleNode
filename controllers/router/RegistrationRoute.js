import express from "express";
import DbManager from "../../database/DbManager";
import dotenv from "dotenv";
import User from "../../models/User";
dotenv.config();

let router = express.Router();


router.post('/', (req,res) =>{
   let userData = req.body;

   const dbManager = new DbManager({
       host: process.env.DB_HOST,
       user: process.env.DB_USER,
       database: process.env.DB_NAME,
       password: process.env.DB_PASS
   });

   let user = new User(req.body);

   dbManager.executeQuery(user.parseIntoSelectByLogin("usersgymstyle"),
       (err, rows, fields)=>{
       if(!err){
           if(rows.length !== 0) {
               console.log(rows);
               console.log("user exists");
           }

       }


   });



   console.log(user.parseIntoSelectByLogin("usersgymstyle"));
   res.json({
       message:"Konto zostało utworzone"
   })
});

export default router;