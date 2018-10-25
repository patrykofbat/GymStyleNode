import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import User from "../../models/User";
import DbManager from "../../database/DbManager";

dotenv.config();

export default {
  authenticate: ({ login, password }) => {
    const dbManager = new DbManager({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      password: process.env.DB_PASS
    });
    const user = new User({ login, password });
    console.log(user.parseIntoSelectByLogin("usersgymstyle"));
  }
};
