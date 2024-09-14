import { appError } from "../errors/appErrors";
import { ZodError } from "zod";
import { JsonWebTokenError } from "jsonwebtoken";
import { Request, Response } from "express";

export class handleErrors {
    static execute(error: Error, req: Request, res: Response) {
        if (error instanceof appError) {
            return res.status(error.statusCode).json({ messagem: error.message});
        }

        if (error instanceof JsonWebTokenError) {
            return res.status(403).json({ message: error.message });
        }

        if (error instanceof ZodError) {
            return res.status(422).json(error);
        }
        console.log(error);

        return res.status(500).json({ message: "Internal server error" });
    }
}