import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { appError } from "../errors/appErrors";

export class isEmailAlreadyRegistered {
    static async execute(req: Request, res: Response, next: NextFunction) {
        const user = await prisma.user.findUnique({ where: { email: req.body.email }});
        
        if(user) {
            throw new appError(409, "Email already registered");
        }
        next();
    }
}