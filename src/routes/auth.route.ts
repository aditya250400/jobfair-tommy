import { Router } from "express"
import { register }  from "../controllers/register.controller"
import { login } from "../controllers/login.controller"

const authRouter = Router()

authRouter.post('/register', register)
authRouter.post('/login', login)

export default authRouter