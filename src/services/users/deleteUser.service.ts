import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const deleteUserService = async (id:string) => {

    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();
    const user = users.find(us => us.id === id);
    if(!user){
        throw new AppError(404,'user not found')
    }
    if(!user.isActive) {
        throw new AppError(400,'User inactive');
    }

    await userRepository.update(id,{isActive:false});





}

export default deleteUserService;