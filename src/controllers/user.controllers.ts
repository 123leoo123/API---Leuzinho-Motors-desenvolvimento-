import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { UserServices } from "../services/userServices";

@injectable()
export class userControllers {
    constructor(@inject("UserServices") private userServices: UserServices) {}

    async register(req: Request, res: Response): Promise<Response> {
        const response = await this.userServices.register(req.body);

        return res.status(201).json(response);
    }

    async login(req: Request, res: Response): Promise<Response> {
        const response = await this.userServices.login(req.body);

        return res.status(200).json(response);
    }

    // responder o id do usuário logado através de seu res locals
    async getUser(req: Request, res: Response): Promise<Response> {
        const id = res.locals.id;

        const response = await this.userServices.getUser(id);

        return res.status(200).json(response);
    }
}

