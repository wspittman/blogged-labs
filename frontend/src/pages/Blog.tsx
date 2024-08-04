import { Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBlogs, getPosts } from "../services/api";

export const Blog = () => {
  const { blogName } = useParams();
  const { data: blogs } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
    refetchOnMount: false,
  });
  const blogData = blogs?.find((x) => x.title === blogName);
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["posts", blogName],
    queryFn: () => getPosts(blogData?.id ?? ""),
    enabled: !!blogData,
    refetchOnMount: false,
  });

  return (
    <div>
      <Typography variant="h3">{blogData?.title}</Typography>
      <Typography variant="h6">{blogData?.description}</Typography>
      {isLoading && <Typography>Loading...</Typography>}
      {isError && <Typography>Error fetching posts</Typography>}
      {posts && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Typography variant="h6">{post.title}</Typography>
              <Typography variant="body1">{post.content}</Typography>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
