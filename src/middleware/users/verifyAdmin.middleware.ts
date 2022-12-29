
import jwt from 'jsonwebtoken';
import { Request,Response,NextFunction } from 'express';
import AppDataSource from '../../data-source';
import { User } from '../../entities/user.entity';

const verifyAdmimMiddleware = async (req:Request,res:Response,next:NextFunction) =>{

    const userRepository = AppDataSource.getRepository(User);
    const token = req.headers.authorization?.replace(/Bearer /,'')
    const users = await userRepository.find();

    if(token){

        jwt.verify(token,"SECRET_KEY",(error,decoded:any)=>{
            const user = users.filter(user => user.email == decoded.email)[0];
            if(!user.isAdm) return res.status(403).json({message:'user is not adm'});
            next();
        })

    }

    


}

export default verifyAdmimMiddleware