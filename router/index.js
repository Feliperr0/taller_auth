import { Router } from "express";
import usersRouter from "./users.js"
import authRouter from "./auth.js"
import billsRouter from "./bills.js"
import propertiesRouter from "./properties.js"
const router = Router()

router.use('/users', usersRouter)
router.use('/auth', authRouter)
router.use('/bills', billsRouter )
router.use('/properties', propertiesRouter)


export default router