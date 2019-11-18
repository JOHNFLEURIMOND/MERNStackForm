//server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Exercise = require("./models/routes.model");
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(cors());
app.use(express.json());
const exercisesRouter = require("./routes/routes");

app.use("/routes", exercisesRouter);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;
db.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.post("/api/form", (req, res) => {
  const firstName = req.body.firstName;
  const middleName = req.body.middleName;
  const lastName = req.body.lastName;
  const phone = Number(req.body.phone);
  const email = req.body.email;
  const confirmEmail = req.body.confirmEmail;
  const comments = req.body.comments;
  const StreetAddress = req.body.StreetAddress;
  const unit = req.body.unit;
  const state = req.body.state;
  const city = req.body.city;
  const zip = req.body.zip;
  const typeOfDegree = req.body.typeOfDegree;
  const degreeAttained = req.body.degreeAttained;
  const educationalInstitution = req.body.educationalInstitution;
  const otherInformation = req.body.otherInformation;

  const newExercise = new Exercise({
    firstName,
    middleName,
    lastName,
    phone,
    email,
    confirmEmail,
    comments,
    StreetAddress,
    unit,
    state,
    city,
    zip,
    typeOfDegree,
    degreeAttained,
    educationalInstitution,
    otherInformation
  });
  newExercise
    .save()
    .then(() => res.json("Email added to DB!"))
    .catch(err => res.json("Error: " + err));
});

app.use(bodyParser.json()); // get information from html forms
if (process.env.NODE_ENV == 'production') {
  // Exprees will serve up production assets
  app.use(express.static('build'));
  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'build/index.html'));
  });
}

// Listen to whatever port above.
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});
