import {StatusCodes} from 'http-status-codes';
import { NextFunction, Request, Response } from 'express'
import JWT, { SignOptions } from 'jsonwebtoken'
import ForbiddenError from '../models/errors/forbidden.error.mode';

export default {
    async createToken (req:Request,res:Response,next: NextFunction) {
        try {
            //came form middleware
            const user = res.locals.user
            if(!user) throw new ForbiddenError('Usuario não autenticado')
            
            const jwtPayload = {username: user.username}
            const jwtOptions:SignOptions = {subject:user?.uuid, expiresIn: "2d"}
            const secretKey:any = process.env.JWT_SECRET_KEY
            const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions)
    
            res.status(StatusCodes.OK).send(jwt)
        } catch (error) {
            console.log(error)
            next(error)
        }
    },

    async tokenValidated(req:Request,res:Response,next: NextFunction) {
        res.sendStatus(StatusCodes.OK)
    }
}