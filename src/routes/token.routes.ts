import express from 'express'
import basicAuthenticationMiddleware from '../middlewares/basic-authentication.middleware';
import jwtAuthenticationMiddleware from '../middlewares/jwt-authentication.middleware';
import tokenController from '../controllers/token.controllers'

const authRouter = express.Router();

const {createToken, tokenValidated} = tokenController

authRouter.post('/', basicAuthenticationMiddleware, createToken);
authRouter.post('/validate', jwtAuthenticationMiddleware, tokenValidated)

export default authRouter;