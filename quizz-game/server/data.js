const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  users: {
    id: Number,
    email: String,
    score: String
  }
},
  { timestamps: true },
  { collection: 'users' }
);


const QuestionsSchema = new Schema({
  questions: {
    id: Number,
    question: String,
    anws1: String,
    anws2: String,
    anws3: String,
    anws4: String,
    true: String,
  }
},
  { timestamps: true },
  { collection: 'questions' }
);

// export the new Schema so we could modify it using Node.js

const users = mongoose.model('user', UsersSchema);
const questions = mongoose.model('question', QuestionsSchema);

module.exports = {users, questions};