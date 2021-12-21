import { NextFunction, Request, Response } from "express";
import JWT from 'jsonwebtoken'
import ForbiddenError from "../models/errors/forbidden.error.mode";

async function jwtAuthenticationMiddleware( req:Request,res:Response,next: NextFunction){
    try {
        const authHeader = req.headers['authorization']
        if(!authHeader) throw new ForbiddenError('Credenciais não informadas')

        const [authType, token ]= authHeader.split(' ')
        if(authType !== 'Bearer' || !token )throw new ForbiddenError('Tipo de autenticação invalido.')

        const secretKey:any = process.env.JWT_SECRET_KEY
        const tokenPayload = JWT.verify(token, secretKey)
        if(typeof tokenPayload !== 'object' || !tokenPayload.sub) throw new ForbiddenError('Token invalido.')
        
        const uuid = tokenPayload.sub
        if(!uuid) throw new ForbiddenError('Token invalido.')

        const user = {
            uuid:tokenPayload.sub,
            username: tokenPayload.username
        }
    
        res.locals.user = user
        next()
    } catch (error) {
        next(error)
    }
}

export default jwtAuthenticationMiddleware