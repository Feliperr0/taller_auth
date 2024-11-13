import { Router } from "express";
import { BillById, getAllBills } from "../controllers/bills/read.js";
import deleteBillById from "../controllers/bills/delete.js";
import user_Not_Found from "../middlewares/user_not_found.js";
import { create, createBills } from "../controllers/bills/create.js"
import validator from "../middlewares/validator.js";
import billSchema from "../schemas/bills/createBills.js"
import updateBillById from "../controllers/bills/update.js";
import schemaManyBills from "../schemas/bills/createManyBills.js"



const router = Router()

router.get('/all', getAllBills); // passport.authenticate('jwt', { session: false }),
router.get('/id/:id', BillById)
router.delete('/delete/:id', deleteBillById, user_Not_Found);
router.post('/create', validator(billSchema), create)
router.post('/createbills', validator(schemaManyBills),  createBills)
router.put('/update/:id', validator(billSchema), updateBillById)


export default router