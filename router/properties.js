import { Router } from "express";
import { getAllProperties, PropertyById } from "../controllers/properties/read.js";
import deletePropertyById from "../controllers/properties/delete.js";
import user_Not_Found from "../middlewares/user_not_found.js";
import { create, createProperties } from "../controllers/properties/create.js";
import validator from "../middlewares/validator.js";
import propertySchema from "../schemas/properties/createProperties.js";
import updatePropertyById from "../controllers/properties/update.js";
import schemaManyProperties from "../schemas/properties/createManyProperties.js"



const router = Router()

router.get('/all', getAllProperties); // passport.authenticate('jwt', { session: false }),
router.get('/id/:id', PropertyById)
router.delete('/delete/:id', deletePropertyById, user_Not_Found);
router.post('/create', validator(propertySchema), create)
router.post('/createproperties', validator(schemaManyProperties), createProperties)
router.put('/update/:id', validator(propertySchema), updatePropertyById)


export default router