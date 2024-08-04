import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export const Blog = () => {
  const { blogName } = useParams();

  const blogData = [
    {
      id: 1,
      title: "Blogged Labs",
      description: "A blog about software development and technology.",
    },
    {
      id: 2,
      title: "React Query",
      description: "A blog about React Query.",
    },
    {
      id: 3,
      title: "React Router",
      description: "A blog about React Router.",
    },
  ].find((x) => x.title === blogName);

  const posts = [
    {
      id: 1,
      title: "React Query - Introduction",
      content: "An introduction to React Query.",
    },
    {
      id: 2,
      title: "React Query - Usage",
      content: "How to use React Query.",
    },
    {
      id: 3,
      title: "React Query - Advanced",
      content: "Advanced React Query techniques.",
    },
  ];

  return (
    <div>
      <Typography variant="h3">{blogData?.title}</Typography>
      <Typography variant="h6">{blogData?.description}</Typography>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Typography variant="h6">{post.title}</Typography>
            <Typography variant="body1">{post.content}</Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};
