import {Request,Response} from 'express'
import { AppError, handleError } from '../../errors/appError'
import listPropertiesCategoryService from '../../services/categories/listPropertiesCategory.service'


const listPropertiesCategoryController = async (req:Request,res:Response) => {
    const {id} = req.params
    try {
       const properties = await listPropertiesCategoryService(id)
        return res.status(200).send(properties);

        
    } catch (error) {
        if(error instanceof AppError){
            handleError(error,res);
        }
    }

}

export default listPropertiesCategoryController