const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  users: {
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

const users = mongoose.model('users', UsersSchema);
const questions = mongoose.model('questions', QuestionsSchema);

module.exports = {users, questions};