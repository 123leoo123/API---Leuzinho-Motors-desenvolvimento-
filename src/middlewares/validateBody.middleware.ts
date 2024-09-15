import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

export class ValidateBody {
    static execute = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
            console.log(req.body)
            req.body = schema.parse(req.body);

            return next();
    }
}