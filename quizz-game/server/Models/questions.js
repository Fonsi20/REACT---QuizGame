const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchemaQuestions = new Schema(
    {
      id: Number,
      question: String,
      anws1: String,
      anws2: String,
      anws3: String,
      anws4: String,
      true: String,
    },
    { timestamps: true },
    { collection: 'questions' }
  );

module.exports = mongoose.model("questions", DataSchemaQuestions);