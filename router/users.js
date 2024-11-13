import { Router } from "express";
import { allUser, userById } from "../controllers/users/read.js";
import validator from "../middlewares/validator.js";
import schemaUsersCreated from "../schemas/users/register.js";
import schemaManyUsers from "../schemas/users/registerManyUsers.js"
import accountExist from "../middlewares/accountExist.js"
// import passport from "../middlewares/passport.js";
import createHash from "../middlewares/createHash.js"
import { create, createUsers } from "../controllers/users/register.js";
import accountsExist from "../middlewares/accountsExist.js";
import createHashes from "../middlewares/createHashes.js";
import deleteUserById from "../controllers/users/delete.js";
import updateUserById from "../controllers/users/update.js";
import user_Not_Found from "../middlewares/user_not_found.js";


const router = Router()


router.post('/register', validator(schemaUsersCreated), accountExist, createHash, create)
router.get('/all', allUser); // passport.authenticate('jwt', { session: false }),
router.get('/id/:id', userById)
router.post('/createusers', validator(schemaManyUsers), accountsExist, createHashes, createUsers);
router.delete('/delete/:id', deleteUserById, user_Not_Found);
router.put('/update/:id', updateUserById, user_Not_Found);


export default router