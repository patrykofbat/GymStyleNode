import express from "express";
import crypto from "crypto";


let router = express.Router();


router.post('/', (req,res) =>{
   let userData = req.body;

   let userPassword = crypto.createHash('sha256').update(userData.password).digest('hex');
   console.log(userPassword);
   res.json({
       message:"Konto zostało utworzone"
   })
});

export default router;