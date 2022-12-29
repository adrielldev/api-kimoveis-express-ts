import { Request,Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import listPropertyService from "../../services/properties/listProperty.service";

const listPropertyController = async  (req:Request,res:Response) => {

    try {
        const properties = await listPropertyService();
        return res.send(properties);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error,res)
        }
    }


}

export default listPropertyController