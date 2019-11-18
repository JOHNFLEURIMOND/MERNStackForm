const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    firstName: { type: String, required: true },
    middleName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    confirmEmail: { type: String, required: true },
    comments: { type: String, required: true },
    StreetAddress: { type: String, required: true },
    unit: { type: Number, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    typeOfDegree: { type: String, required: true },
    degreeAttained: { type: String, required: true },
    educationalInstitution: { type: String, required: true },
    otherInformation: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
