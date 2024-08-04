import { Link, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { ping } from "../services/api";

export const Home = () => {
  const navigate = useNavigate();
  const result = useQuery({ queryKey: ["ping"], queryFn: ping });

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
  ];

  return (
    <div>
      <Typography variant="h3">Welcome to Blogged Labs!</Typography>
      <Typography variant="h6">
        Select from the finest artisanal blogs:
      </Typography>
      <ul>
        {blogData.map((blog) => (
          <li key={blog.id}>
            <Link
              underline="hover"
              href={`/${blog.title}`}
              onClick={(e) => {
                e.preventDefault();
                navigate(`/${blog.title}`);
              }}
            >
              {blog.title}
            </Link>
            <Typography variant="body1">{blog.description}</Typography>
          </li>
        ))}
      </ul>
      Ping Result: {JSON.stringify(result, null, 2)}
    </div>
  );
};
