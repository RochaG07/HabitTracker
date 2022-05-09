
import { Response } from "express";
import AppError from "./AppError";

export default function handleError(err: any, res: Response){
    if(err instanceof AppError){
        return res.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }
    
    console.log(err);
    
    return res.status(500).json({ 
        status: 'error',
        message: 'Internal server error',
    });
}

