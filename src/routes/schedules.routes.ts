import { Router } from "express";
import createScheduleController from "../controllers/schedules/createSchedule.controller";
import getSchedulesController from "../controllers/schedules/getSchedules.controller";
import invalidPropertyIdMiddleware from "../middleware/schedules/invalidPropertyId.middleware";
import verifyScheduleMiddleware from "../middleware/schedules/verifySchedule.middleware";
import verifyAdmimMiddleware from "../middleware/users/verifyAdmin.middleware";
import verifyAuthTokenMiddleware from "../middleware/users/verifyAuthToken.middleware";

const router =Router();


export const schedulesRouter = () =>{
    router.post('',verifyAuthTokenMiddleware,invalidPropertyIdMiddleware,verifyScheduleMiddleware,createScheduleController);
    router.get('/properties/:id',verifyAuthTokenMiddleware,verifyAdmimMiddleware,invalidPropertyIdMiddleware,getSchedulesController)

    return router
}

export default router

