import { injectable } from "tsyringe";
import { prisma } from "../database/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { TUserLoginBody, TUserLoginReturn, TUserRegisterBody, TUserReturn, userReturnSchema } from "../schemas/user.schema";


@injectable()
export class UserServices {
    async login(body: TUserLoginBody): Promise<TUserLoginReturn> {
        const user = await prisma.user.findUnique({where: {email: body.email}});
    
        if(!user) {
            throw new Error("User not found");
        }

        const compare = await bcrypt.compare(body.password, user.password);
        
        if(!compare) {
            throw new Error("Email and Password does not match");
        }

        const token =jwt.sign({id: user.id}, process.env.JWT_SECRET as string, {expiresIn: "1h"});
    
        return { acessToken: token, user: userReturnSchema.parse(user) };
    }

    async register(body: TUserRegisterBody): Promise<TUserReturn> {
        const hashPassword = await bcrypt.hash(body.password, 10);

        const newUser = {
            ...body,
            password: hashPassword
        }

        const user = await prisma.user.create({data: newUser});

        return userReturnSchema.parse(user);
    }

    async getUser(id: string): Promise<TUserReturn> {
        const user = await prisma.user.findFirst({where: {id: Number(id)}});
        
        return userReturnSchema.parse(user);
    }
}