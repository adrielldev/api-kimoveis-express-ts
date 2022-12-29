import { Property } from "../../entities/property.entity";


import { IAddressRequest,IPropertyRequest } from "../../interfaces/properties";

import { Category } from "../../entities/category.entity";

import {v4 as uuidv4} from 'uuid'

import AppDataSource from "../../data-source";
import { Address } from "../../entities/address.entity";
import { AppError } from "../../errors/appError";

const createPropertyService = async ({value,size,categoryId,address}:IPropertyRequest) => {

    const propertyRepository = AppDataSource.getRepository(Property);
    const addressRepository = AppDataSource.getRepository(Address);
    const categoryRepository = AppDataSource.getRepository(Category);
    const categories = await categoryRepository.find();
    const categoryName = categories.find(cat=>cat.id === categoryId)?.name

    if(address.zipCode.length > 8) {
        throw new AppError(400,'zip code com tamanho maior que 8');
    }
    if(address.state.length > 2) {
        throw new AppError(400,'state com tamanho maior que 2')
    }

   

    const endereco = new Address
    endereco.city = address.city
    endereco.district = address.district
    endereco.number = address.number
    endereco.state = address.state
    endereco.zipCode = address.zipCode

    const property = new Property
    property.value = value
    property.size = size;
    property.category_id=categoryId;
    property.sold = false;
    property.createdAt = new Date();
    property.updatedAt = new Date();
    property.address = endereco

     addressRepository.create(endereco);
    await addressRepository.save(endereco);
     


    propertyRepository.create(property)
    await propertyRepository.save(property)


    return {...property,category:categoryName};


}

export default createPropertyService