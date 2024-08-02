import mongoose from "mongoose";

const pingSchema = new mongoose.Schema({
  value: String,
});

export const Ping = mongoose.model("Ping", pingSchema);
