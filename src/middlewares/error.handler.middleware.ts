import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import DatabaseError from "../models/errors/database.error.model";
import ForbiddenError from "../models/errors/forbidden.error.mode";

function errorHandler(error:any, req:Request,res:Response,next: NextFunction){
    if (error instanceof DatabaseError) res.sendStatus(StatusCodes.BAD_REQUEST)

    if (error instanceof ForbiddenError) res.sendStatus(StatusCodes.FORBIDDEN)

    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
}

export default errorHandler