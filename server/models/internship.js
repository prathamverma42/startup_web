import mongoose from "mongoose";

const internshipSchema = mongoose.Schema({
  jobPosition: {
    type: String,
    required: [true, "Please add the role you are hiring for"],
  },
  location: {
    type: String,
    required: [true, "Please add location of the work"],
  },
  responsibilities: {
    type: String,
    required: [true],
  },
  skillsRequired: {
    type: String,
  },
  perks: {
    type: String,
    required: [true],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

const InternShips = mongoose.model("internship", internshipSchema);
export default InternShips;
