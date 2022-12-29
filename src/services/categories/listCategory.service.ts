import { Category } from "../../entities/category.entity";
import AppDataSource from "../../data-source";


const listCategoryService = async () => {
    const catRepository = AppDataSource.getRepository(Category);
    const categories = await catRepository.find();



    return categories;


}

export default listCategoryService