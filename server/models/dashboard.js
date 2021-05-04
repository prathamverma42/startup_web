import mongoose from "mongoose";

const dashboardSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  image: {
    type: String,
    required: [true, "Please add a image"],
  },
  city: {
    type: String,
    required: [true, "Please add a city"],
  },
  state: {
    type: String,
    required: [true, "Please add a state"],
  },
  experience: {
    title: {
      type: String,
      required: [true, "Please add a title"],
    },
    subtitle: {
      type: String,
      required: [true, "Please add a subtitle"],
    },
    startdate: {
      type: Date,
      default: new Date(),
    },
    enddate: {
      type: Date,
      default: new Date(),
    },
  },
  skills: {
    type: [String],
    required: [true, "Please add a skills"],
  },
  college: {
    type: String,
    required: [true, "Please add a collge"],
  },
  yearOfStudy: {
    type: Number,
    required: [true, "Please add a year of Study"],
  },
  password: {
    type: String,
    required: [true],
  },
});

const Dashboard = mongoose.model("Dashboard", dashboardSchema);
export default Dashboard;
