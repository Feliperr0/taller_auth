import express from "express"
import "dotenv/config.js"
import "./config/database.js"
import cors from 'cors'
import morgan from "morgan";
import indexRouter from './router/index.js'
import not_found_handler from "./middlewares/not_found_handler.js";
import error_handler from "./middlewares/error_handler.js";
import bad_request from "./middlewares/bad_request.js";


const server = express()

const PORT = process.env.PORT

const ready = () => console.log("Server test in port: " + PORT)

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cors())
server.use(morgan('dev'))

// router 
server.use('/api', indexRouter)

server.use(not_found_handler)
server.use(error_handler)
server.use(bad_request)

server.listen(PORT, ready)


