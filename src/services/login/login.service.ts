import AppDataSource from "../../data-source";
import { IUserLogin } from "../../interfaces/users";
import { User } from "../../entities/user.entity";  
import bcrypt from 'bcrypt'
import { AppError } from "../../errors/appError";
import jwt from 'jsonwebtoken';

const loginService = async ({email,password}:IUserLogin) => {
    
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();

    const account = users.find(user => user.email === email);
    if(!account){
        throw new AppError(403,'Wrong email/password');
    }
    if(!bcrypt.compareSync(password,account.password)){
        throw new AppError(403,'Wrong email/password');        
    }
    if(!account.isActive) {
        throw new AppError(400,'User inactive');
    }


    const token = jwt.sign(
        {email:email},
        "SECRET_KEY",
        {expiresIn:'1d'}
    )
    return token;

}

export default loginService