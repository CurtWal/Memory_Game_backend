const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
  },
  cards: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const scoreModel = new mongoose.model("High Score", scoreSchema);

module.exports = scoreModel;
