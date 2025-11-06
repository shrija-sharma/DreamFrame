// Copyright 2025 PREM
// Licensed under the Apache License, Version 2.0 (the "License");
// You may not use this file except in compliance with the License.
// https://www.apache.org/licenses/LICENSE-2.0

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import imageRouter from "./routes/imageRoutes.js";
import userRouter from "./routes/userRoutes.js";

// Load environment variables explicitly from ./server/.env
dotenv.config({ path: "./.env" });

const port = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());

// Debugging: confirm environment variables are loaded
console.log("MONGODB_URI loaded:", !!process.env.MONGODB_URI);
console.log("CLIPDROP_API loaded:", !!process.env.CLIPDROP_API);
console.log("JWT_SECRET loaded:", !!process.env.JWT_SECRET);

// Connect MongoDB
await connectDB();

// Routes
app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);

app.get("/", (req, res) => {
  res.send("API Working ✅");
});

app.listen(port, () => console.log(`Server started on PORT: ${port}`));
