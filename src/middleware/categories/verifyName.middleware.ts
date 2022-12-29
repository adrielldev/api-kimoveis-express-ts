import {Request,Response,NextFunction} from 'express';
import AppDataSource from '../../data-source';
import { Category } from '../../entities/category.entity';


const verifyNameMiddleware = async (req:Request,res:Response,next:NextFunction) => {
    const categoryRepository = AppDataSource.getRepository(Category);
    const {name} = req.body
    const categories = await categoryRepository.find();
    const cat = categories.find(categ => categ.name === name);
    if(cat) {
       return res.status(400).send({message:'category already exists'})
    }

    next();
    


}

export default verifyNameMiddleware