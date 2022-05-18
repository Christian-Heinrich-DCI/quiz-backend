import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import bodyParser from "body-parser"; // damit man Daten an das Backend schicken kann (für Highscore)

const app = express();

// ---------- Enviroment Variables ----------

const port = process.env.PORT;
const mongo_connect = process.env.MONGO_CONNECTION;

// ---------- Express Middleware ----------

app.use(bodyParser.json());

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
    // In req.body kommt (hoffentlich) an: { player: X, points: Y }
    console.log("req.body:", req.body);
    const newHighscore = new Highscore(req.body);
    await mongoose.connect(mongo_connect);
    const result = await newHighscore.save();
    console.log("result:", result);
    res.send(result);
  } catch (err) {
    // Rückmeldung - Erfolg/Error
    res.send(err);
  }
});

//  ---------- Express ----------

app.listen(port, () => {
  console.log(`Quiz App Backend is listeing on port ${port} ...`);
});
