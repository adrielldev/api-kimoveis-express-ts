import { Category } from "../../entities/category.entity";
import AppDataSource from "../../data-source";
import {ICategoryRequest} from '../../interfaces/categories'


const createCategoryService =  async({name}:ICategoryRequest) => {
    const categoryRepository = AppDataSource.getRepository(Category);

    const category = new Category
    category.name = name;

    categoryRepository.create(category);
    await categoryRepository.save(category);



    return category
}
export default createCategoryService