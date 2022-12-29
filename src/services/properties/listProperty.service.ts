import AppDataSource from "../../data-source";
import { Property } from "../../entities/property.entity";

const listPropertyService = async () => {

    const propertyRepository = AppDataSource.getRepository(Property);
    const properties = await propertyRepository.find();



    return properties
}

export default listPropertyService