const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchemaUsers = new Schema(
  {
    userid: Number,
    email: String,
    score: String
  },
  { timestamps: true },
  { collection: 'users' }
);


// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("users", DataSchemaUsers);