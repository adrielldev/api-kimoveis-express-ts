import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategory.controller";
import listCategoryController from "../controllers/categories/listCategory.controller";
import listPropertiesCategoryController from "../controllers/categories/listPropertiesCategory.controller";
import verifyNameMiddleware from "../middleware/categories/verifyName.middleware";
import verifyAdmimMiddleware from "../middleware/users/verifyAdmin.middleware";
import verifyAuthTokenMiddleware from "../middleware/users/verifyAuthToken.middleware";


const router = Router();

export const categoryRouter = () => {

    router.post('',verifyAuthTokenMiddleware,verifyAdmimMiddleware,verifyNameMiddleware,createCategoryController);
    router.get('',listCategoryController);
    router.get('/:id/properties',listPropertiesCategoryController);

    return router
}

export default router




