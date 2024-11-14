import { Router } from "express";
import { getAllProperties, PropertyById } from "../controllers/properties/read.js";
import deletePropertyById from "../controllers/properties/delete.js";
import user_Not_Found from "../middlewares/user_not_found.js";
import { create, createProperties } from "../controllers/properties/create.js";
import validator from "../middlewares/validator.js";
import propertySchema from "../schemas/properties/createProperties.js";
import updatePropertyById from "../controllers/properties/update.js";
import schemaManyProperties from "../schemas/properties/createManyProperties.js"
import passport from "../middlewares/passport.js";


const router = Router()

router.get('/all', passport.authenticate('jwt', { session: false }), getAllProperties); // passport.authenticate('jwt', { session: false }),
router.get('/id/:id', passport.authenticate('jwt', { session: false }), PropertyById)
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), deletePropertyById, user_Not_Found);
router.post('/create', passport.authenticate('jwt', { session: false }), validator(propertySchema), create)
router.post('/createproperties', passport.authenticate('jwt', { session: false }), validator(schemaManyProperties), createProperties)
router.put('/update/:id', passport.authenticate('jwt', { session: false }), validator(propertySchema), updatePropertyById)


export default router