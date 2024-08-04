import Box from "@mui/material/Box";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./frame/Header";
import { Blog } from "./pages/Blog";
import { Home } from "./pages/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        margin: "-8px",
      }}
    >
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:blogName" element={<Blog />} />
            <Route path="/:blogName/:postName" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Box>
  );
}

export default App;
