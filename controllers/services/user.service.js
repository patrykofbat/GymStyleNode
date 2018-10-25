import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import User from "../../models/User";
import DbManager from "../../database/DbManager";

dotenv.config();

export default {
  authenticate: async ({ login, password }) => {
    const dbManager = new DbManager({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      password: process.env.DB_PASS
    });
    const user = new User({ login, password });
    console.log(user.parseIntoSelectByLogin("usersgymstyle"));

    let result = await dbManager.executeQueryAsync(
      user.parseIntoSelectByLogin("usersgymstyle")
    );

    return new Promise((resolve, reject) => {
      if (result.length !== 0) {
        if (user.checkPassword(result[0].password)) {
          const login = user.login;
          const token = jwt.sign({ login }, process.env.SECRET);
          resolve({ token, login });
        } else {
          reject(new Error("Nie poprawne dane! "));
        }
      }
    });
  }
};
