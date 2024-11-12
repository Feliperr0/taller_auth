import { Router } from "express";
import { create, createUsers } from "../controllers/users/register.js";
import { getAllBills } from "../controllers/bills/read.js";


const router = Router()

router.get('/all', getAllBills); // passport.authenticate('jwt', { session: false }),

// router.get('/role/:x', userByRole);

// router.get('/id/:id', userById)

router.post('/create', create)
router.post('/createbills', createUsers);

// router.post('/createusers', createUsers)


export default router