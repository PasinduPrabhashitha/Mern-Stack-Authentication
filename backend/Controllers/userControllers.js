import asyncHandler from "express-async-handler";
import User from "../Models/UserModel.js";
import bcrypt from "bcryptjs";
import { sendRegistrationEmail } from "../MailingConfiguration/mailingconfig.js";

//Route to register a user "/api/users/register"
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const existUser = await User.findOne({ email });

  if (!existUser) {
    const newUser = await User.create({
      name,
      email,
      password,
    });

    sendRegistrationEmail(name);
    res.json(newUser);
  } else {
    res.status(400);
    throw new Error("User already exist. Please Login.");
  }
});

//Route to login and authenticate a user
const authenticateUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    const matchPassword = await bcrypt.compare(password, user.password);

    if (matchPassword) {
      res.json({
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(400);
      throw new Error("Email or Password doesn't match!");
    }
  } else {
    res.status(400);
    throw new Error("Please enter a valid email or password!");
  }
});

export { registerUser, authenticateUser };
