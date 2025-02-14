import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const api = axios.create({
  baseURL: API_URL,
});

export const ping = async () => {
  const response = await api.get("/ping");
  return response.data as string;
};

export const getBlogs = async () => {
  const response = await api.get("/blogs");
  return response.data as {
    _id: string;
    title: string;
    description: string;
  }[];
};

export const getPosts = async (id: string) => {
  const response = await api.get(`/blogs/${id}/posts`);
  return response.data as {
    _id: string;
    title: string;
    content?: string;
  }[];
};
