import {StatusCodes} from 'http-status-codes';
import express, { NextFunction, Request, Response } from 'express'
import userRepository from '../repositories/user.repository';
import User from '../models/user.model';
import DatabaseError from "../models/errors/database.error.model";
const {findAllUsers, findById,createUser,updateUser,deleteUser} = userRepository
// import userAuthenticated from '../middlewares/userAuthenticaded';
// import { UserController } from '../resources/user/user.controllers';

const userRouter = express.Router();
// const userController = new UserController

userRouter.get('/',async (req:Request,res:Response,next: NextFunction)=> {
    try {
        
        const users= await findAllUsers()
        res.status(StatusCodes.OK).send(users)
    } catch (error) {
        next(error)
    }
});
userRouter.get('/:uuid',async (req:Request<{uuid:string}>,res:Response,next: NextFunction)=> {
    try {
        const {uuid} = req.params
        const user:User = await findById(uuid)
        res.status(StatusCodes.OK).send(user)
    } catch (error) {
        next(error)
    }
})

userRouter.post('/', async (req:Request,res:Response,next: NextFunction)=> {
    try {
        
        const newUser = req.body
        const newUserUuid = await createUser(newUser)
        res.status(StatusCodes.CREATED).send(newUserUuid)
    } catch (error) {
        next(error)
    }
    
});
userRouter.put('/:uuid', async (req:Request<{uuid:string}>,res:Response,next: NextFunction)=> {
    try {
        
        const {uuid} = req.params
        const modifiedUser = req.body
        await updateUser({...modifiedUser,uuid})
        const userUpdated = await findById(uuid)
        res.status(StatusCodes.OK).send(userUpdated)  
    } catch (error) {
        next(error)
    }
    
});
userRouter.delete('/:uuid', async (req:Request,res:Response,next: NextFunction)=> {
    try {
        
        const {uuid} = req.params
        await deleteUser(uuid)
        res.sendStatus(StatusCodes.OK) 
    } catch (error) {
        next(error)
    }
});
 
export default userRouter;