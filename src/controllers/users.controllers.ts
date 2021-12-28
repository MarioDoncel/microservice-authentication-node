import {StatusCodes} from 'http-status-codes';
import { NextFunction, Request, Response } from 'express'
import userRepository from '../repositories/user.repository';
import User from '../models/user.model';

const {findAllUsers, findById,createUser,updateUser,deleteUser} = userRepository

export default {
    async all (req:Request,res:Response,next: NextFunction) {
        try {
            
            const users= await findAllUsers()
            res.status(StatusCodes.OK).send(users)
        } catch (error) {
            next(error)
        }
    },
    async one (req:Request<{uuid:string}>,res:Response,next: NextFunction) {
        try {
            const {uuid} = req.params
            const user:User = await findById(uuid)
            res.status(StatusCodes.OK).send(user)
        } catch (error) {
            next(error)
        }
    },
    async create (req:Request,res:Response,next: NextFunction) {
        try {
            const newUser = req.body
            const newUserUuid = await createUser(newUser)
            res.status(StatusCodes.CREATED).send(newUserUuid)
        } catch (error) {
            next(error)
        }
    },
    async update(req:Request<{uuid:string}>,res:Response,next: NextFunction) {
        try {
            
            const {uuid} = req.params
            const modifiedUser = req.body
            await updateUser({...modifiedUser,uuid})
            const userUpdated = await findById(uuid)
            res.status(StatusCodes.OK).send(userUpdated)  
        } catch (error) {
            next(error)
        }
        
    },
    async deleteOne (req:Request,res:Response,next: NextFunction) {
        try {
            
            const {uuid} = req.params
            await deleteUser(uuid)
            res.sendStatus(StatusCodes.OK) 
        } catch (error) {
            next(error)
        }
    }
}