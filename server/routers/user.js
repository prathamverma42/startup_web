import express from "express";

import { register, login, getMe } from "../controllers/user.js";
import { protect } from "../middleware/auth.js";
import User from "../models/user.js";
import internshipRouter from "./internship.js";
import advancedResults from "../middleware/advancedResults.js";
const router = express.Router();

router.use("/:userId/internships", internshipRouter);

router.post("/register", register);
router.post("/login", login);
router.route("/me").get(advancedResults(User, "internship"), protect, getMe);

export default router;
