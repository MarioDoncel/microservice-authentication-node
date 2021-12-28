import express from 'express'
import usersController from '../controllers/users.controllers'

const userRouter = express.Router();

const {all,one,create,update,deleteOne } = usersController

userRouter.get('/',all);
userRouter.get('/:uuid',one)

userRouter.post('/', create);

userRouter.put('/:uuid', update );

userRouter.delete('/:uuid', deleteOne);
 
export default userRouter;