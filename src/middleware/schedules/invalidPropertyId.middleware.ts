import {Request,Response,NextFunction} from 'express';
import AppDataSource from '../../data-source';

import { Property } from '../../entities/property.entity';

const invalidPropertyIdMiddleware = async (req:Request,res:Response,next:NextFunction) => {
    const {propertyId} = req.body
    const propertyIdParams = req.params.id
    const propertyRepository = AppDataSource.getRepository(Property);
   
    const properties = await propertyRepository.find()
    if(!propertyIdParams){
        const propertyExist = properties.find(prop => prop.id == propertyId); 
    if(!propertyExist){
        return res.status(404).send({message:'propriedade não existe'})
    }

    }else{
        const propertyExist = properties.find(prop => prop.id == propertyIdParams); 
        if(!propertyExist){
            return res.status(404).send({message:'propriedade não existe'})
        }

    }

     
    

    next();

}

export default invalidPropertyIdMiddleware