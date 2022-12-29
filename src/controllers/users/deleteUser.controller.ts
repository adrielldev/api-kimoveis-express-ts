import { Request,Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import deleteUserService from "../../services/users/deleteUser.service";


const deleteUserController = async (req:Request,res:Response) => {

    const {id} = req.params

    try {
        await deleteUserService(id);

        return res.status(204).send({message:'user deleted with success'})
    } catch (error) {
        console.log(error,'dasdsa');
        if(error instanceof AppError){
            handleError(error,res);
        }
    }


}

export default deleteUserController