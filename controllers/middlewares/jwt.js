import expressJwt from "express-jwt";
import dotenv from "dotenv";

dotenv.config();

const jwt = () => {
  const secret = process.env.SECRET;
  return expressJwt({ secret }).unless({
    path: ["/login", "/registration", /\/*\.pdf/]
  });
};

export default jwt;
