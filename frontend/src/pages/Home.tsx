import { Link, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getBlogs } from "../services/api";

export const Home = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
    refetchOnMount: false,
  });

  return (
    <div>
      <Typography variant="h3">Welcome to Blogged Labs!</Typography>
      {isLoading && <Typography>Loading...</Typography>}
      {isError && <Typography>Error fetching blogs</Typography>}
      {data && (
        <>
          <Typography variant="h6">
            Select from the finest artisanal blogs:
          </Typography>
          <ul>
            {data.map((blog) => (
              <li key={blog._id}>
                <Link
                  underline="hover"
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
        </>
      )}
    </div>
  );
};
