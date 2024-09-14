import { inject, injectable } from "tsyringe";
import { AutomobileServices } from "../services/automobileServices";
import { Request, Response } from "express";
import { string } from "zod";


@injectable()
export class AutomobilesControllers {
    constructor(@inject("AutomobilesServices") private automobilesServices: AutomobileServices) {}

    async create(req: Request, res: Response) {
        const id = res.locals.decode?.id;

        const response = await this.automobilesServices.create(req.body, id);

        return res.status(201).json(response);
    }

    async findMany(req: Request, res: Response) {
        const response = await this.automobilesServices.findMany((req.params.name));

        return res.status(200).json(response);
    }

    async update(req: Request, res: Response) {
        const response = await this.automobilesServices.update(Number(req.params.id), req.body);

        return res.status(200).json(response);
    }

    async delete(req: Request, res: Response) {
        await this.automobilesServices.delete(Number(req.params.id));

        return res.status(204).json('Automobile deleted');
    }
}