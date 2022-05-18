import express from "express";
import "dotenv/config";
import mongoose from "mongoose";

const app = express();

// ---------- Enviroment Variables ----------

const port = process.env.PORT;
const mongo_connect = process.env.MONGO_CONNECTION;

// ---------- Database ----------

const { Schema } = mongoose;

// ---------- Database: Questions ----------

const questionsSchema = new Schema({
  question: String,
  answers: [
    {
      answer: String,
      points: Number,
    },
  ],
});

const Questions = mongoose.model("Question", questionsSchema, "questions");

// ---------- Database: Highscore ----------

const highscoreSchema = new Schema({
  player: String,
  points: Number,
});

const Players = mongoose.model("Player", highscoreSchema, "players");

// ---------- Routes ----------

app.get("/questions", async (req, res) => {
  await mongoose.connect(mongo_connect);
  const questions = await Questions.find();
  res.json(questions);
});

app.get("/players", async (req, res) => {
  await mongoose.connect(mongo_connect);
  const players = await Players.find();
  res.json(players);
});

app.post("/players/:id", async (req, res) => {
  // await mongoose.connect(mongo_connect);
  // const result = await Players.find();
  // res.json(result);
});

//  ---------- Express ----------

app.listen(port, () => {
  console.log(`Quiz App Backend is listeing on port ${port} ...`);
});
