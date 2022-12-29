import { Router } from "express";

const router = Router();
import createUserController from "../controllers/users/createUser.controller";
import listUserController from "../controllers/users/listUser.controller";

import verifyEmailMiddleware from "../middleware/users/verifyEmail.middleware";
import verifyAuthTokenMiddleware from "../middleware/users/verifyAuthToken.middleware";
import verifyAdmimMiddleware from "../middleware/users/verifyAdmin.middleware";
import deleteUserController from "../controllers/users/deleteUser.controller";

export const userRouter = () =>{

    router.post('',verifyEmailMiddleware,createUserController)
    router.get('',verifyAuthTokenMiddleware,verifyAdmimMiddleware,listUserController);
    router.delete('/:id',verifyAuthTokenMiddleware,verifyAdmimMiddleware,deleteUserController);
    return router
}

export default router