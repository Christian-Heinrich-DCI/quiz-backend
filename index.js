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

const questionSchema = new Schema({
  question: String,
  answers: [
    {
      answer: String,
      points: Number,
    },
  ],
});

const Question = mongoose.model("Question", questionSchema, "questions");

// ---------- Database: Highscores ----------

const highscoreSchema = new Schema({
  player: String,
  points: Number,
});

const Highscore = mongoose.model("Highscore", highscoreSchema, "highscores");

// ---------- Routes ----------

app.get("/questions", async (req, res) => {
  try {
    await mongoose.connect(mongo_connect);
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.send(err);
  }
});

app.get("/highscores", async (req, res) => {
  try {
    await mongoose.connect(mongo_connect);
    const highscores = await Highscore.find();
    res.json(highscores);
  } catch (err) {
    res.send(err);
  }
});

app.post("/highscores", async (req, res) => {
  try {
    // In req.body kommt { player: X, points: Y }
    console.log(req.body);
    const newHighscore = new Highscore(req.body);
    await mongoose.connect(mongo_connect);
    const result = await newHighscore.save();
    console.log(result);
    // in Datenbank schreiben
    // Rückmeldung - Erfolg/Error
    res.send("In Progress");
  } catch (err) {
    // Rückmeldung - Erfolg/Error
    res.send(err);
  }
});

//  ---------- Express ----------

app.listen(port, () => {
  console.log(`Quiz App Backend is listeing on port ${port} ...`);
});
