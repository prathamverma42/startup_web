import UserDashboard from "../models/userdashboard.js";

export const getUser = async (req, res, next) => {
  const user = await UserDashboard.find();
  res.status(200).json({ success: true, data: user });
};
export const createUser = async (req, res, next) => {
  const user = await UserDashboard.create(req.body);
  res.status(201).json({
    success: true,
    data: user,
  });
};
