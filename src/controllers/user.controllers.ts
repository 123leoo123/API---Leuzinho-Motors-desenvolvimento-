import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { UserServices } from "../services/userServices";

@injectable()
export class userControllers {
<<<<<<< HEAD
    private userServices: UserServices;

    constructor(userServices: UserServices) {
        this.userServices = userServices;
    }

    async register(req: Request, res: Response): Promise<Response> {     
=======
    constructor(@inject("UserServices") private userServices: UserServices) {}

    // registrar o usuário
    async register(req: Request, res: Response): Promise<Response> {
>>>>>>> 440733800a8a077122feda5bbbe4e5979638dea6
        const response = await this.userServices.register(req.body);

        return res.status(201).json(response);
    }

<<<<<<< HEAD
=======
    // logar o usuário
>>>>>>> 440733800a8a077122feda5bbbe4e5979638dea6
    async login(req: Request, res: Response): Promise<Response> {
        const response = await this.userServices.login(req.body);

        return res.status(200).json(response);
    }

<<<<<<< HEAD
    async getUser(req: Request, res: Response): Promise<Response> {
        const id = res.locals.decode.id;
=======
    // responder o id do usuário logado através de seu res locals
    async getUser(req: Request, res: Response): Promise<Response> {
        const id = res.locals.id;
>>>>>>> 440733800a8a077122feda5bbbe4e5979638dea6

        const response = await this.userServices.getUser(id);

        return res.status(200).json(response);
    }
<<<<<<< HEAD
}
=======
}

>>>>>>> 440733800a8a077122feda5bbbe4e5979638dea6
