import express from "express";
import { Blog, Ping, Post } from "./models";

export const router = express.Router();

router.get("/ping", async (req, res) => {
  const count = await Ping.countDocuments();
  res.send(`API is working with ${count} ping documents`);
});

router.get("/blogs", async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

router.get("/blogs/:id/posts", async (req, res) => {
  const posts = await Post.find({ blogId: req.params.id });
  res.json(posts);
});
