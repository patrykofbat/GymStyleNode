import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

export default router;
