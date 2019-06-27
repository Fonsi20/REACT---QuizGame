var express = require("express");
var mongoose = require("mongoose");
var app = express();
const API_PORT = 3000;
const {users,questions} = require("./data");
const router = express.Router();

// this is our MongoDB database
const dbRoute = "mongodb://localhost:27017/gamequiz";

// connects our back end code with the database
mongoose.connect(
    dbRoute,
    { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));
// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});

app.get('/api/question', function (req, res) {
    questions.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

app.post('/api/results', function (req, res) {
    let use = new users();
    const { email, score } = req.body;

    use.email = email;
    use.score = score;
  
    use.save(err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

app.get('/api/results', function (req, res) {
    var mysort = { "score": -1 };
    users.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    }).sort(mysort);
});

app.get('/api/Verify', function (req, res) {
    users.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

app.get('/api/results/:userId', function (req, res) {
    users.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, function () {
    console.log("Server Working!");
});
