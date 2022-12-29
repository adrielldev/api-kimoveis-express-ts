import { Schedules } from "../../entities/schedules.entity";
import AppDataSource from "../../data-source";
import {IScheduleRequest} from '../../interfaces/schedules'
import { AppError } from "../../errors/appError";

const createScheduleService = async ({userId,propertyId,date,hour}:IScheduleRequest) => {

    const scheduleRepository = AppDataSource.getRepository(Schedules);

    if(hour.length < 5){
        throw new AppError(400,'formato errado de hora')
    }
    if(Number(date.split('/')[2])>12){
        throw new AppError(400,'formato errado de data')
    }


    const schedule = new Schedules
    schedule.user =userId;
    schedule.property = propertyId
    schedule.date = new Date(date)
    schedule.hour = new Date(hour);

    


    scheduleRepository.create(schedule);
    await scheduleRepository.save(schedule);

    return schedule;




}

export default createScheduleService