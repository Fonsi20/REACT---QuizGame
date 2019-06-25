var express = require("express");
var mongoose = require("mongoose");
var app = express();
const API_PORT = 3001;
const DataUser = require("./Models/users");
const DataQuestions = require("./Models/questions");
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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));



router.get('/api/question', function (req, res) {
    DataQuestions.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

router.post('/api/results', function (req, res) {

    let data = new DataUser();
    const { id, email, score } = req.body;

    if ((!id && id !== 0)) {
        return res.json({
            success: false,
            error: "INVALID INPUTS"
        });
    }
    data.email = email;
    data.score = score;
    data.id = id;
    data.save(err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

router.get('/api/results', function (req, res) {
    DataUser.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

router.get('/api/Verify', function (req, res) {
    DataUser.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

router.get('/api/results/:userId', function (req, res) {
    DataUser.find((err, data) => {
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
