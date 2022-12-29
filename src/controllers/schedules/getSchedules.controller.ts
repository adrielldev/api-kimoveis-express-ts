import { Request,Response } from "express";
import { AppError, handleError } from "../../errors/appError";

import getSchedulesService from "../../services/schedules/getSchedules.service";

const getSchedulesController = async (req:Request,res:Response) =>{

    const{id} = req.params
    try {
        const schedules = await getSchedulesService(id);
        return res.status(200).send({schedules:schedules});

    } catch (error) {
        if(error instanceof AppError){
            handleError(error,res)
        }
    }



}

export default getSchedulesController