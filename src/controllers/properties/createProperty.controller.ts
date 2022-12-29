import { Request,Response } from "express";
import { AppError,handleError } from "../../errors/appError";
import createPropertyService from "../../services/properties/createProperty.service";


const createPropertyController = async (req:Request,res:Response) => {
     const{value,size,categoryId,address} = req.body 
    try {

         const prop = await createPropertyService({value,size,categoryId,address}); 
        return res.status(201).send(prop);    
    } catch (error) {
        if(error instanceof AppError){
            handleError(error,res);
        }
    }


}

export default createPropertyController