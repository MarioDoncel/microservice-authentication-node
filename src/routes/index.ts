import express,{Request,Response,NextFunction} from 'express'
import { StatusCodes } from 'http-status-codes';
import userRouter from './user.routes'
import authRouter from './token.routes';
import jwtAuthenticationMiddleware from '../middlewares/jwt-authentication.middleware';

const routes = express.Router();

routes.get('/', (req:Request, res:Response, next:NextFunction)=>{
    
    res.status(StatusCodes.OK).send('⚡️:Application is running ')
})

routes.use('/users',jwtAuthenticationMiddleware, userRouter);
routes.use('/token', authRouter);


export default routes;
