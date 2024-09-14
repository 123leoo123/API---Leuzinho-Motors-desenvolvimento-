import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { appError } from "../errors/appErrors";

export class isAutorizedUser {
    static async execute(req: Request, res: Response, next: NextFunction) {
        const userId = res.locals.decode?.id;

        const user = await prisma.user.findFirst({ where: { id: Number(req.params.id) } });

        //segmento para níveis de autorização dos usuários

        // if (user?.id !== userId) {
        //     throw new appError(403, "User is not authorized to perform this action");
        // }
    }
}