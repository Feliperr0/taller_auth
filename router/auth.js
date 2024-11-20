import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import accountNotExist from "../middlewares/accountNotExist.js";
import isValidPassword from "../middlewares/isValidPassword.js";
import generateToken from "../middlewares/generateToken.js";
import passportGoogle from "../middlewares/passportGoogle.js";

const routerAuth = Router();

routerAuth.post('/signin', accountNotExist, isValidPassword, generateToken, signIn);
routerAuth.post('/logout');

// Ruta para iniciar sesión con Google
routerAuth.get('/signin/google', passportGoogle.authenticate('google', { scope: ['profile', 'email'], session: false }))
routerAuth.get('/signin/google/callback', passportGoogle.authenticate('google', { session: false, failureRedirect: '/login' }), generateToken, signIn)


export default routerAuth;
