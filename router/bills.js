import { Router } from "express";
import { BillById, getAllBills } from "../controllers/bills/read.js";
import deleteBillById from "../controllers/bills/delete.js";
import user_Not_Found from "../middlewares/user_not_found.js";
import {create, createBills} from "../controllers/bills/create.js"


const router = Router()

router.get('/all', getAllBills); // passport.authenticate('jwt', { session: false }),
router.get('/id/:id', BillById)
router.delete('/delete/:id', deleteBillById, user_Not_Found);
router.post('/create', create)
router.post('/createbills', createBills)


export default router