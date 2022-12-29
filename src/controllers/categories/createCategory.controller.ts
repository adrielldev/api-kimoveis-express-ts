import { Request,Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import createCategoryService from "../../services/categories/createCategory.service";

const createCategoryController = async (req:Request,res:Response) => {
    const {name} = req.body
    const token = req.headers.authorization
    if(!token) {
        throw new AppError(401,'NOT TOKEN');
    }

    try {
        const category = await createCategoryService({name});
        return res.status(201).send(category)
    } catch (error) {
    if(error instanceof AppError) {
        handleError(error,res);
    }   
    }


}

export default createCategoryController