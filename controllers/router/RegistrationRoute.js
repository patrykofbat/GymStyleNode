import express from "express";
import DbManager from "../../database/DbManager";
import dotenv from "dotenv";
import User from "../../models/User";
dotenv.config();

let router = express.Router();

router.post("/", (req, res) => {
  let userData = req.body;
  let message = "";

  const dbManager = new DbManager({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS
  });

  let user = new User(req.body);
  console.log(userData);

  dbManager.executeQuery(
    user.parseIntoSelectByLogin("usersgymstyle"),
    (err, rows, fields) => {
      if (!err) {
        if (rows.length !== 0) {
          console.log(rows);
          console.log("user exists");
          message = "Użytkownik istnieje";
          res.json({ message });
        } else {
          dbManager.executeQuery(
            user.parseIntoInsertQuery("usersgymstyle"),
            (err, rows, fields) => {
              if (!err) {
                console.log("ello");
                message = "Konto zostało utworzone";
              } else {
                message = "Konto nie zostało utworzone";
              }
              res.json({ message });
            }
          );
        }
      } else {
        res.json({ message: err });
      }
    }
  );
});

export default router;
