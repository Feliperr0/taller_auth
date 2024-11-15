import { Router } from "express";
import { allUser, userById, usersByManyIds } from "../controllers/users/read.js";
import validator from "../middlewares/validator.js";
import schemaUsersCreated from "../schemas/users/register.js";
import schemaManyUsers from "../schemas/users/registerManyUsers.js"
import accountExist from "../middlewares/accountExist.js"
import passport from "../middlewares/passport.js";
import createHash from "../middlewares/createHash.js"
import { create, createUsers } from "../controllers/users/register.js";
import accountsExist from "../middlewares/accountsExist.js";
import createHashes from "../middlewares/createHashes.js";
import deleteUserById from "../controllers/users/delete.js";
import updateUserById from "../controllers/users/update.js";
import user_Not_Found from "../middlewares/user_not_found.js";
import verify_id_query from "../middlewares/verify_id_query.js";
import validate_ids from "../middlewares/validate_ids.js";


const router = Router()


router.post('/register', validator(schemaUsersCreated), accountExist, createHash, create);
router.get('/all', allUser);
router.get('/ids', verify_id_query, validate_ids, usersByManyIds);
router.get('/id/:id', passport.authenticate('jwt', { session: false }), userById);
router.post('/createusers', passport.authenticate('jwt', { session: false }), validator(schemaManyUsers), accountsExist, createHashes, createUsers);
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), deleteUserById, user_Not_Found);
router.put('/update/:id', passport.authenticate('jwt', { session: false }), updateUserById, user_Not_Found);


export default router

