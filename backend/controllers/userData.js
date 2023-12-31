import jwt from "jsonwebtoken";
import {
  registerUserService,
  getUsersService,
  loginUserService,
  getUserById,
} from "../services/userService.js";
import { secretKey } from "../constants/config.js";

export const getUsersController = async (req, res, next) => {
  try {
    const getUser = await getUsersService();
    return res.status(200).json(getUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to fetch data" });
  }
};

export const registerUserController = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, phoneNumber } = req.body;

    await registerUserService({
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    });

    return res.status(201).json({ message: "User added successfully" });
  } catch ({ message }) {
    res.status(409).json({
      success: false,
      operational: true,
      message,
    });
  }
};

export const loginUserController = async (req, res, next) => {
  try {
    const { phoneNumber, password } = req.body;

    const user = await loginUserService({
      phoneNumber,
      password,
    });

    delete user.password;

    const token = jwt.sign(
      { userId: user._id, phoneNumber: user.phoneNumber },
      secretKey
    );

    return res.status(200).json({ message: "Login successful", user, token });
  } catch (error) {
    return res
      .status(401)
      .json({ operational: true, success: false, message: error.message });
  }
};


// get user by id 

export const getUserByIdController = async (req, res) => {
  try {
    const response = await getUserById(req.params.id);
    res.status(response.status).send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send({
      status: 500,
      message: "An error occurred while creating the company."
    });
  }
};