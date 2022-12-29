import {Request,Response,NextFunction} from 'express';


import AppDataSource from '../../data-source';
import { Category } from '../../entities/category.entity';


const verifyCategoryIdMiddleware = async (req:Request,res:Response,next:NextFunction) => {
    const categoryRepository = AppDataSource.getRepository(Category);
    const categories = await categoryRepository.find();

   const catId = req.body.categoryId;
   const categoryExist = categories.find(category => category.id == catId);
   if(!categoryExist){
    return res.status(404).send({message:'category not exist'});
   }


    next();


}

export default verifyCategoryIdMiddleware