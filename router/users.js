import { Router } from "express";
// import { allUser, userById, userByRole } from "../controllers/users/read.js";
// import { createUsers } from "../controllers/users/register.js"
import validator from "../middlewares/validator.js";
import schemaUsersCreated from "../schemas/users/register.js";
import accountExist from "../middlewares/accountExist.js"
// import passport from "../middlewares/passport.js";
import createHash from "../middlewares/createHash.js"
import { create, createUsers } from "../controllers/users/register.js";


const router = Router()

// router.get('/all',  allUser); // passport.authenticate('jwt', { session: false }),

// router.get('/role/:x', userByRole);

// router.get('/id/:id', userById)

router.post('/register', validator(schemaUsersCreated), accountExist, createHash, create)
router.post('/createusers', createUsers);

// router.post('/createusers', createUsers)


export default router