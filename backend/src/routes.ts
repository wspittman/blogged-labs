import express from "express";
import { Ping } from "./models";

export const router = express.Router();

router.get("/ping", async (req, res) => {
  const count = await Ping.countDocuments();
  res.send(`API is working with ${count} ping documents`);
});
