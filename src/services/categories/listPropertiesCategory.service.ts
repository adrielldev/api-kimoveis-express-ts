import { Category } from "../../entities/category.entity";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";

const listPropertiesCategoryService = async (id:string) => { //categories/:id/properites
    const categoryRepository = AppDataSource.getRepository(Category);
    const categories = await categoryRepository.find();

    const categoriesId = categories.find(cat => cat.id == id);
    console.log(categoriesId);
    if(categoriesId){
        return {name:categoriesId.name,id:categoriesId.id,properties:categoriesId.properties}
    }else{
        throw new AppError(404,'category not found')
    }

}

export default listPropertiesCategoryService