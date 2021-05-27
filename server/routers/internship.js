import express from "express";
import { getInternships, createInternship } from "../controllers/internship.js";
import advancedResults from "../middleware/advancedResults.js";
import InternShips from "../models/internship.js";
import { protect, authorize } from "../middleware/auth.js";

const router = express.Router({ mergeParams: true });

router.get(
  "/",
  advancedResults(InternShips, {
    path: "user",
    select: "name",
  }),
  getInternships
);
router.post("/", protect, authorize("admin", "company"), createInternship);

export default router;
