import { Express } from "express";

import { loginRouter } from "./login.routes";
import { userRouter } from "./user.routes";
import { categoryRouter } from "./categories.routes";
import { propertyRouter } from "./properties.routes";
import { schedulesRouter } from "./schedules.routes";


export const appRoutes = (app:Express) =>{

    app.use('/users',userRouter());
    app.use('/login',loginRouter());
    app.use('/categories',categoryRouter());
    app.use('/properties',propertyRouter());
    app.use('/schedules',schedulesRouter());
}
