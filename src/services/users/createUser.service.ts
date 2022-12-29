import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUser, IUserRequest } from "../../interfaces/users";
import bcrypt from 'bcrypt'

const createUserService = async ({name,email,password,isAdm}:IUserRequest) => {
    const userRepository = AppDataSource.getRepository(User);


    const user = new User
    user.name = name
    user.email = email
    user.password = bcrypt.hashSync(password,10);
    user.isAdm = isAdm;
    user.isActive = true;
    user.createdAt = new Date();
    user.updatedAt = new Date();


    const returnedUser:IUser = {
        id:user.id,
        name:user.name,
        email:user.email,
        isAdm:user.isAdm,
        isActive:user.isActive,
        createdAt:user.createdAt,
        updatedAt:user.updatedAt
    }

    userRepository.create(user);
    await userRepository.save(user);


    return returnedUser;

}

export default createUserService