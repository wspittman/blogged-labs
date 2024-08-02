import { useQuery } from "@tanstack/react-query";
import { ping } from "../services/api";

export const Home = () => {
  const result = useQuery({ queryKey: ["ping"], queryFn: ping });

  return <div>Ping Result: {JSON.stringify(result, null, 2)}</div>;
};
