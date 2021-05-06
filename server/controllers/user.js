import User from "../models/user.js";
import ErrorResponse from "../utils/errorResponse.js";

// export const register = async (req, res) => {
//   const { name, email, phoneNumber, password } = req.body;
//   const user = await user.create({
//     name,
//     email,
//     phoneNumber,
//     password,
//   });
//   res.status(200).json({
//     success: true,
//     data: user,
//   });
// };

// export const createPost = async (req, res) => {
//   // res.send("hello post request");
//   const data = req.body;
//   const newuser = new user(data);
//   await newuser.save();
//   res.status(200).json(newuser);
// };

export const register = async (req, res, next) => {
  const { name, email, password, phoneNumber } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    phoneNumber,
  });
  sendTokenResponse(user, 200, res);
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  // Check for user
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorResponse("Invalid Credentials", 401));
  }

  // Check if password matches
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse("Invalid Credentials", 401));
  }

  sendTokenResponse(user, 200, res);
};

const sendTokenResponse = (user, statusCode, res) => {
  // Create Token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
  });
};

export const getMe = async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    data: user,
  });
};
