import express from "express";
import { Ping } from "./models";

export const router = express.Router();

router.get("/ping", async (req, res) => {
  const count = await Ping.countDocuments();
  res.send(`API is working with ${count} ping documents`);
});

router.get("/blogs", async (req, res) => {
  res.json([
    {
      id: "1",
      title: "Blogged Labs",
      description: "A blog about software development and technology.",
    },
    {
      id: "2",
      title: "React Query",
      description: "A blog about React Query.",
    },
    {
      id: "3",
      title: "React Router",
      description: "A blog about React Router.",
    },
  ]);
});

router.get("/blogs/:id/posts", async (req, res) => {
  const id = req.params.id;
  res.json([
    {
      id: "1",
      title: "React Query - Introduction",
      content: "An introduction to React Query.",
    },
    {
      id: "2",
      title: "React Query - Usage",
      content: "How to use React Query.",
    },
    {
      id: "3",
      title: "React Query - Advanced",
      content: "Advanced React Query techniques.",
    },
  ]);
});
