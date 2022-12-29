import {Request,Response} from 'express';
import { AppError, handleError } from '../../errors/appError';
import listCategoryService from '../../services/categories/listCategory.service';

const listCategoryController = async(req:Request,res:Response) => {

    try {
        const categories = await listCategoryService();

        return res.send(categories);
        
    } catch (error) {
        if(error instanceof AppError) {
            handleError(error,res);
        }
    }


}

export default listCategoryController