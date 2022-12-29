import { Router } from "express";
import createPropertyController from "../controllers/properties/createProperty.controller";
import listPropertyController from "../controllers/properties/listProperty.controller";
import verifyCategoryIdMiddleware from "../middleware/properties/verifyCategoryId.middleware";
import verifyPropertyExistMiddleware from "../middleware/properties/verifyPropertyExist.middleware";
import verifyAdmimMiddleware from "../middleware/users/verifyAdmin.middleware";
import verifyAuthTokenMiddleware from "../middleware/users/verifyAuthToken.middleware";



const router = Router()

export const propertyRouter = () =>{

    router.post('/',verifyAuthTokenMiddleware,verifyAdmimMiddleware,verifyPropertyExistMiddleware,verifyCategoryIdMiddleware,createPropertyController)
    router.get('/',listPropertyController)
    return router
}

export default router


