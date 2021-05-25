import InternShips from "../models/internship.js";
import User from "../models/user.js";
import ErrorResponse from "../utils/errorResponse.js";
export const getInternships = async (req, res, next) => {
  if (req.params.userId) {
    const internships = await InternShips.find({ user: req.params.userId });
    return res.status(200).json({
      success: true,
      count: internships.length,
      data: internships,
    });
  } else {
    res.status(200).json(res.advancedResults);
  }
};
export const getInternship = async (req, res, next) => {
  const internship = await InternShips.findById(req.params.id).populate({
    path: "user",
    select: "name",
  });
  if (!internship) {
    return next();
  }
  res.status(200).json({
    success: true,
    data: internship,
  });
};
export const createInternship = async (req, res, next) => {
  req.body.user = req.params.userId;
  const user = await User.findById(req.params.userId);
  if (!user) {
    return next(
      new ErrorResponse(`No User with the id of ${req.params.userId}`),
      404
    );
  }
  if (req.user.role !== "company") {
    return next(
      new ErrorResponse(
        `The user with ID ${req.user.id} cannot post an Internship`
      )
    );
  }
  const internship = await InternShips.create(req.body);
  res.status(201).json({
    success: true,
    data: internship,
  });
};
