import { Router } from "express";
import loginController from "../controllers/login/login.controller";

const router = Router()

export const loginRouter = () => {
    router.post('/',loginController)

    return router

}


export default router