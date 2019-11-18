const router = require("express").Router();
let Exercise = require("../models/routes.model");

router.route("/api/form ").get((req, res) => {
  Exercise.find()
    .then(Exercises => res.json(exercises))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/api/form").post((req, res) => {
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

router.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id)
    .then(Exercise => res.json(Exercise))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/form/:id").post((req, res) => {
  Exercise.findById(req.params.id)
    .then(Exercise => {
      exercise.firstName = req.body.firstName;
      exercise.middleName = req.body.middleName;
      exercise.lastName = req.body.lastName;
      exercise.phone = Number(req.body.phone);
      exercise.email = req.body.email;
      exercise.confirmEmail = req.body.confirmEmail;
      exercise.comments = req.body.comments;

      exercise
        .save()
        .then(() => res.json("Exercise updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
