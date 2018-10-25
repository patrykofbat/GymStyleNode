import express from "express";
import userService from "../services/user.service";

const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body);
  userService
    .authenticate(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(401).json(err));
});

export default router;
