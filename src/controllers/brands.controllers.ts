import { injectable, inject } from "tsyringe";
import { BrandServices } from "../services/brandServices";
import { Request, Response } from "express";


@injectable()
export class BrandsControllers {
    constructor(@inject("BrandsServices") private brandsServices: BrandServices) {}

    // função para administrador da API, para criar uma marca de automóvel
    async create(req: Request, res: Response) {
        const id = res.locals.decode?.id;

        const response = await this.brandsServices.create(req.body, id);

        return res.status(201).json(response);
    }
    // função para usuários para buscar os automóveis pela marca
    async findOne(req: Request, res: Response) {
        const response = await this.brandsServices.findOne(String(req.params.id));

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