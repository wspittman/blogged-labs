import express from "express";

export const router = express.Router();

router.get("/ping", (req, res) => {
  res.send("API is working");
});
