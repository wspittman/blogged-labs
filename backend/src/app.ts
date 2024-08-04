import cors from "cors";
import express from "express";
import { connectDB } from "./config";
import { router } from "./routes";
import { seedDatabase } from "./seed";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", router);

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  seedDatabase().then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });
});
