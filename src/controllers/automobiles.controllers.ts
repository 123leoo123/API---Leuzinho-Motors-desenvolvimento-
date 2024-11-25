<<<<<<< HEAD
import { inject, injectable } from "tsyringe";
import { AutomobileServices } from "../services/automobileServices";
=======
import { injectable, inject } from "tsyringe";
import { AutomobilesServices } from "../services/automobileServices";
>>>>>>> 440733800a8a077122feda5bbbe4e5979638dea6
import { Request, Response } from "express";
import { string } from "zod";


@injectable()
export class AutomobilesControllers {
    constructor(@inject("AutomobilesServices") private automobilesServices: AutomobilesServices) {}

    // função para usuário criar seu anúncio de automóvel
    async create(req: Request, res: Response) {
        const id = res.locals.decode?.id;

        const response = await this.automobilesServices.create(id, req.body);

        return res.status(201).json(response);
    }

    // função para usuário buscar todos automóveis daquele modelo disponíveis
    async findMany(req: Request, res: Response) {
<<<<<<< HEAD
        const response = await this.automobilesServices.findMany((req.params.name));
=======
        const response = await this.automobilesServices.findMany(String(req.params));
>>>>>>> 440733800a8a077122feda5bbbe4e5979638dea6

        return res.status(200).json(response);
    }
    
    // função para o usuário dar update em seu anúncio de automóvel
    async update(req: Request, res: Response) {
        const response = await this.automobilesServices.update(Number(req.params.id), req.body);

        return res.status(200).json(response);
    }

    // função para usuário deletar seu anúncio de seu automóvel
    async delete(req: Request, res: Response) {
        await this.automobilesServices.delete(Number(req.params.id));

        return res.status(204).json('Automobile deleted');
    }
}