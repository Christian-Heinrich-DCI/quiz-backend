import express from "express";
import "dotenv/config";
import mongoose from "mongoose";

const app = express();

// Enviroment Variables
const port = process.env.PORT;
const mongo_connect = process.env.MONGO_CONNECTION;

// Database
const { Schema } = mongoose;
const quizSchema = new Schema({
  question: String,
  answers: [
    {
      answer: String,
      points: Number,
    },
  ],
});

app.get("/questions", (req, res) => {
  res.send("Working!");
});

app.listen(port, () => {
  console.log(`Quiz App Backend is listeing on port ${port} ...`);
});
