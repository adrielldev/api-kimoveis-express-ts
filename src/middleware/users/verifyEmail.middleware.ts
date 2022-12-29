import {Request,Response,NextFunction} from 'express';

import { AppError,handleError } from '../../errors/appError';
import AppDataSource from '../../data-source';
import { User } from '../../entities/user.entity';


const verifyEmailMiddleware = async (req:Request,res:Response,next:NextFunction) => {
    const {email}= req.body
    
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find()
    
    const user = users.find(us => us.email === email);

    if(user){
        return res.status(400).send({message:'email already exists'});
    }
    
    next();



}

export default verifyEmailMiddleware