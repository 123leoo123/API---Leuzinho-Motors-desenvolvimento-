import { injectable, inject } from "tsyringe";
import { BrandsServices } from "../services/brandServices";
import { Request, Response } from "express";


@injectable()
export class BrandsControllers {
    constructor(@inject("BrandsServices") private brandsServices: BrandsServices) {}

    // função para administrador da API, para criar uma marca de automóvel
    async create(req: Request, res: Response) {
        const id = res.locals.decode?.id;

        const response = await this.brandsServices.create(req.body);

        return res.status(201).json(response);
    }
    // função para usuários para buscar os automóveis pela marca
    async findOne(req: Request, res: Response) {
<<<<<<< HEAD
        const response = await this.brandsServices.findOne((req.params.name));
=======
        const response = await this.brandsServices.findOne(String(req.params.id));
>>>>>>> 440733800a8a077122feda5bbbe4e5979638dea6

        return res.status(200).json(response);
    }
    // função para administrador da API, para atualizar a marca de automóvel
    async update(req: Request, res: Response) {
        const response = await this.brandsServices.update(Number(req.params.id), req.body);

        return res.status(200).json(response);
    }
    // função para administrador da API, para deletar a marca de automóvel
    async delete(req: Request, res: Response) {
        await this.brandsServices.delete(Number(req.params.id));

        return res.status(204).json('Brand deleted');
    }
    // função para usuários para buscar todas as marcas de automóveis disponíveis
    async findAll(req: Request, res: Response) {
        const response = await this.brandsServices.findAll();

        return res.status(200).json(response);
    }
}