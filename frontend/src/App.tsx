import Box from "@mui/material/Box";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./frame/Header";
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
          <Home />
        </BrowserRouter>
      </QueryClientProvider>
    </Box>
  );
}

export default App;
