const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchemaUsers = new Schema(
  {
    id: Number,
    email: String,
    score: String
  },
  { timestamps: true },
  { collection: 'users' }
);


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

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("users", DataSchemaUsers);
module.exports = mongoose.model("questions", DataSchemaQuestions);