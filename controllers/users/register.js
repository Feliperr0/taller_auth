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

const createUsers = async (req, res, next) => {
    try {
      const users = req.body.users; // Suponiendo que la petición incluye un array de usuarios en `req.body.users`
  
      // Validar y hashear contraseñas
      const processedUsers = await Promise.all(users.map(async (user) => {
        // Validar si la cuenta existe
        const existingUser = await User.findOne({ email: user.email });
        if (existingUser) {
          throw new Error(`User with email ${user.email} already exists`);
        }
  
        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return { ...user, password: hashedPassword, online: false }; // Inicializar `online` a false
      }));
  
      // Crear usuarios en la base de datos
      const createdUsers = await User.insertMany(processedUsers);
  
      return res.status(201).json({
        success: true,
        message: "Users created successfully",
        users: createdUsers
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }
  };


export {create, createUsers}



// Middleware para validar si las cuentas existen y hashear contraseñas

