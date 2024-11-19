import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { appError } from "../errors/appErrors";

export class isDuplicateBrandExist {
    static async execute(req: Request, res: Response, next: NextFunction) {
        const { name } = req.body;

        const brandExist = await prisma.brand.findFirst({ where: { name } });

        if(brandExist) {
            throw new appError(401, "Category already exist");
        }
        return next();
    }
}

export class isBrandExist {
    static async execute(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        const brandExist = await prisma.brand.findFirst({ where: { id: +id } });

        if(!brandExist) {
            throw new appError(404, "Brand not found");
        }
        return next();
    }
}

