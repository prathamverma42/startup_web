import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import BodyParser from "body-parser";
import dotenv from "dotenv";

import internshipRoute from "./routers/internship.js";
import companydashboardRoute from "./routers/companydashboard.js";
import userDashboardRoute from "./routers/userdashboard.js";
import user from "./routers/user.js";

dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT || 5000;

app.use(BodyParser.json());
app.use(cors());

//app.use('/',dashboardRoute);
app.use("/v1/internships", internshipRoute);
app.use("/v1/companyDashboard", companydashboardRoute);
app.use("/v1/userDashboard", userDashboardRoute);
app.use("/v1/user", user);

mongoose
  .connect(process.env.MONGO_URI, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(app.listen(PORT), console.log(`Server started running at PORT ${PORT}`))
  .catch((error) => {
    console.log(error.message);
  });
