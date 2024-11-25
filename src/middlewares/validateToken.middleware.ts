<<<<<<< HEAD
import jwt from "jsonwebtoken";
import { appError } from "../errors/appErrors";
import { NextFunction, Request, Response } from "express";
=======
import { NextFunction, Request, Response } from "express";
import { appError } from "../errors/appErrors";
import jwt from "jsonwebtoken";
>>>>>>> 440733800a8a077122feda5bbbe4e5979638dea6

export class validateToken {
    static execute(req: Request, res: Response, next: NextFunction) {
        const authorization = req.headers.authorization;

<<<<<<< HEAD
        const token = authorization?.replace("Bearer ", "");
        console.log("validate token")
        if (!token) {
            throw new appError(403, "Token not found");
=======
        const token = authorization?.replace('Bearer ', '');

        if(!token) {
            throw new appError(401, "Unauthorized");
>>>>>>> 440733800a8a077122feda5bbbe4e5979638dea6
        }

        jwt.verify(token, process.env.JWT_SECRET as string);

        res.locals.decode = jwt.decode(token);

        next();
    }
}