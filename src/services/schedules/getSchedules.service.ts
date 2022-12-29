import { Schedules } from "../../entities/schedules.entity";
import AppDataSource from "../../data-source";

const getSchedulesService = async (id:string) => {

    const schedulesRepository = AppDataSource.getRepository(Schedules);
    const schedules = await schedulesRepository.find();
    const propId = id;
    
    const schedulesProperty = schedules.filter(schedule => {
        const schedulePropId = Object.values(schedule.property)[0];
        return propId === schedulePropId 
    })

    return schedulesProperty
}

export default getSchedulesService