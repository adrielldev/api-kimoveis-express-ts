import {Request, Response} from 'express'
 import loginService from '../../services/login/login.service';
import { AppError,handleError } from '../../errors/appError';


const loginController = async (req:Request,res:Response) => {

    const {email,password} = req.body


    try {
        const token = await loginService({email,password});
        return res.status(200).send({token:token})
        
    } catch (error) {
        if(error instanceof AppError) {
            handleError(error,res);
        }
    }


}

export default loginController
