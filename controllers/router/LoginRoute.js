import express from "express";
import userService from "../services/user.service";

const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body);
  userService.authenticate(req.body);
  res.json(req.body);
});

export default router;
