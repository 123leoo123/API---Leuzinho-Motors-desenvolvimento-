import { NextFunction, Request, Response } from "express";
import { appError } from "./appErrors";
import { JsonWebTokenError } from "jsonwebtoken";
import { ZodError } from "zod";

export class handleErrors {
    static execute(error: Error, req: Request, res: Response, next: NextFunction) {
        if(error instanceof appError) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        if(error instanceof JsonWebTokenError) {
            return res.status(401).json({ message: error.message });
        }
        if(error instanceof ZodError) {
            const Error = {"errors": error.issues}
            return res.status(400).json(Error);
        }
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }  
}

