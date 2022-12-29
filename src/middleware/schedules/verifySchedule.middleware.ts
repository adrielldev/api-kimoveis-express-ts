import {Request,Response,NextFunction} from 'express';
import AppDataSource from '../../data-source';
import { Schedules } from '../../entities/schedules.entity';


const verifyScheduleMiddleware = async (req:Request,res:Response,next:NextFunction) => {
    const {date} = req.body
    const scheduleRepository = AppDataSource.getRepository(Schedules);
    const schedules = await scheduleRepository.find()
    const scheduleAlreadyExist = schedules.find(sch => {
        const data = new Date(date);
        return sch.date.toString() == data.toString()
    });
    if(scheduleAlreadyExist){
        return res.status(400).send({message:'ja existe esse schedule'})
    }

    next();



}

export default verifyScheduleMiddleware