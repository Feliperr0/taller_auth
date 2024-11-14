import { Router } from "express";
import { BillById, getAllBills } from "../controllers/bills/read.js";
import deleteBillById from "../controllers/bills/delete.js";
import user_Not_Found from "../middlewares/user_not_found.js";
import { create, createBills } from "../controllers/bills/create.js"
import validator from "../middlewares/validator.js";
import billSchema from "../schemas/bills/createBills.js"
import updateBillById from "../controllers/bills/update.js";
import schemaManyBills from "../schemas/bills/createManyBills.js"
import passport from "../middlewares/passport.js";


const router = Router()

router.get('/all', passport.authenticate('jwt', { session: false }), getAllBills); // passport.authenticate('jwt', { session: false }),
router.get('/id/:id', passport.authenticate('jwt', { session: false }), BillById)
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), deleteBillById, user_Not_Found);
router.post('/create', passport.authenticate('jwt', { session: false }), validator(billSchema), create)
router.post('/createbills', passport.authenticate('jwt', { session: false }), validator(schemaManyBills),  createBills)
router.put('/update/:id', passport.authenticate('jwt', { session: false }), validator(billSchema), updateBillById)


export default router