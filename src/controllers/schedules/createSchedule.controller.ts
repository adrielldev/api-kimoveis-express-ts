import {Request,Response} from 'express';
import { AppError, handleError } from '../../errors/appError';
import createScheduleService from '../../services/schedules/createSchedule.service';

const createScheduleController = async (req:Request,res:Response) =>{
    const{userId,propertyId,date,hour} = req.body

    try {
        const schedule = await createScheduleService({userId,propertyId,date,hour});
        return res.status(201).send({message:'Schedule created'});
    } catch (error) {
        if(error instanceof AppError){
            handleError(error,res);
        }
    }
    


}

export default createScheduleController