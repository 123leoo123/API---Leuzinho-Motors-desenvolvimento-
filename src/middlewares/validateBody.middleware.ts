import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

<<<<<<< HEAD
export class ValidateBody {
    static execute = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
            console.log(req.body)
            req.body = schema.parse(req.body);

            return next();
=======
export class validateBody {
    static execute = (Schema: ZodSchema) => async (req: Request, res: Response, next: NextFunction) => {
        req.body = await Schema.parseAsync(req.body);

        return next();
>>>>>>> 440733800a8a077122feda5bbbe4e5979638dea6
    }
}