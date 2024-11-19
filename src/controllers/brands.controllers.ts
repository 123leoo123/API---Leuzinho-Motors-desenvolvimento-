import { injectable } from "tsyringe";
import { BrandServices } from "../services/brandServices";
import { Request, Response } from "express";

@injectable()
export class BrandsControllers {
    constructor(@inject("BrandsServices") private brandsServices: BrandServices) {}

    async create(req: Request, res: Response) {
        const id = res.locals.decode?.id;

        const response = await this.brandsServices.create(req.body, id);

        return res.status(201).json(response);
    }

    async findOne(req: Request, res: Response) {
        const response = await this.brandsServices.findOne(Number(req.params.id));

        return res.status(200).json(response);
    }

    async update(req: Request, res: Response) {
        const response = await this.brandsServices.update(Number(req.params.id), req.body);

        return res.status(200).json(response);
    }

    async delete(req: Request, res: Response) {
        await this.brandsServices.delete(Number(req.params.id));

        return res.status(204).json('Brand deleted');
    }

    async findAll(req: Request, res: Response) {
        const response = await this.brandsServices.findAll();

        return res.status(200).json(response);
    }
}