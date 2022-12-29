import {Request,Response,NextFunction} from 'express';
import AppDataSource from '../../data-source';
import { Property } from '../../entities/property.entity';
import { Address } from '../../entities/address.entity';

const verifyPropertyExistMiddleware = async (req:Request,res:Response,next:NextFunction) =>{
const endereco = req.body.address;

const addressRepository = AppDataSource.getRepository(Address);
const addresses = await addressRepository.find();
const addressAlreadyExist = addresses.find(address => {
    return address.zipCode == endereco.zipCode && address.number == endereco.number
});


if(addressAlreadyExist){
    return res.status(400).send({message:'property already exist'})
}



next();

}


export default verifyPropertyExistMiddleware