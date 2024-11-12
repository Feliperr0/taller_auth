import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import accountNotExist from "../middlewares/accountNotExist.js";
import isValidPassword from "../middlewares/isValidPassword.js";
import generateToken from "../middlewares/generateToken.js";

const routerAuth = Router()

routerAuth.post('/login', accountNotExist, isValidPassword, generateToken, signIn)

export default routerAuth