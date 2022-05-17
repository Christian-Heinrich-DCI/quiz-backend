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
const Quiz = mongoose.model("Question", quizSchema, "questions");

app.get("/questions", async (req, res) => {
  await mongoose.connect(mongo_connect);
  const questions = await Quiz.find();
  //   console.log(questions);
  res.json(questions);
});

app.listen(port, () => {
  console.log(`Quiz App Backend is listeing on port ${port} ...`);
});
