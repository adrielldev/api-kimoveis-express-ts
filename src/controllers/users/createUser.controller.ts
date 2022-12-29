import {Request, Response} from 'express'
import createUserService from '../../services/users/createUser.service';
import { AppError,handleError } from '../../errors/appError';


const createUserController = async (req:Request,res:Response) => {

    const {name,email,password,isAdm} = req.body
    try {

        const user = await createUserService({name,email,password,isAdm});

        return res.status(201).send(user);
        
    } catch (error) {
        if(error instanceof AppError) {
            handleError(error,res);
        }
    }


}

export default createUserController
