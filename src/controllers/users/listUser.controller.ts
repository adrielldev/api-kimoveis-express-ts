import {Request,Response} from 'express';
import { AppError, handleError } from '../../errors/appError';
import listUserService from '../../services/users/listUser.service';



const listUserController = async (req:Request,res:Response) => {


        try {
            const users = await listUserService();
            return res.send(users);
            
        } catch (error) {
            if(error instanceof AppError){
                handleError(error,res);
            }
        }



}


export default listUserController