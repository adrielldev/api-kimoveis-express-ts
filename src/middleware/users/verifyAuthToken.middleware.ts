import {Request,Response,NextFunction} from 'express';
import jwt from 'jsonwebtoken';



const verifyAuthTokenMiddleware = async (req:Request,res:Response,next:NextFunction) => {

    const token = req.headers.authorization?.replace(/Bearer /,'')
    if(!token) return res.status(401).send({message:'Missing token authorization'})

    jwt.verify(token,"SECRET_KEY",(error,_)=>{

        if(error) return res.status(401).json({message:'token inválido'})
    })

    next();
}


export default verifyAuthTokenMiddleware