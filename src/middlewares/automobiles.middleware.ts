import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { appError } from "../errors/appErrors";

export class isDuplicateAutomobile {
    static async execute(req: Request, res: Response, next: NextFunction) {
        const { plate } = req.body;

        const automobileExist = await prisma.automobile.findFirst({ where: { plate }});
        
        if(automobileExist) {
            throw new appError(401, "Automobile already registered");
        }
        return next();
    }
}

export class isAutomobileOwner {
    static async execute(req: Request, res: Response, next: NextFunction) {
        const userId = res.locals.decode?.id;

        if(res.locals.automobile?.userId !== userId) {
            throw new appError(403, "This user is not the owner of this automobile");
        }
        next();
    }
}

export class isAutomobileExist {
    static async execute(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        const automobileExist = await prisma.automobile.findFirst({ where: { id }});
        
        res.locals.automobile = automobileExist;
        
        if(!automobileExist) {
            throw new appError(404, "Automobile not found");
        }
        
        next();
    }
}