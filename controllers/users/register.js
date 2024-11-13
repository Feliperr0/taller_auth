import User from "../../models/User.js";
import bcrypt from "bcryptjs";

let create = async (req, res, next) => {
  try {
    let user = req.body;
    user.online = false;

    let createUser = await User.create(user);

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      response: createUser
    });
  } catch (error) {
    next(error);
  }
};

const createUsers = async (req, res) => {
  try {
    let users = req.body;


    let createdUsers = await User.insertMany(users);

    return res.status(201).json({
      success: true,
      message: "Users created successfully",
      users: createdUsers
    });
  } catch (error) {
    next(error)
  }
};

export { create, createUsers }



// Middleware para validar si las cuentas existen y hashear contraseñas



