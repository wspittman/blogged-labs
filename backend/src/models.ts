import mongoose from "mongoose";

const pingSchema = new mongoose.Schema({
  value: String,
});

export const Ping = mongoose.model("Ping", pingSchema);

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export const Blog = mongoose.model("Blog", blogSchema);

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: String,
  blogId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Blog",
  },
});

export const Post = mongoose.model("Post", postSchema);
