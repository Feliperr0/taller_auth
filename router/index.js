import { Router } from "express";
import usersRouter from "./users.js"
import authRouter from "./auth.js"
import billsRouter from "./bills.js"
const router = Router()

router.use('/users', usersRouter)
router.use('/auth', authRouter)
router.use('/bills', billsRouter )


export default router