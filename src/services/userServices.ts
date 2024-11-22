import { injectable } from "tsyringe";
import bcrypt from "bcrypt";
import { UserCreateSchema, UserLoginSchema, userReturn, UserReturnSchema } from "../schemas/user.schema";
import { prisma } from "../database/prisma";
import { appError } from "../errors/appErrors";
import jwt from "jsonwebtoken";

@injectable()
export class UserServices {
    async register(body: UserCreateSchema): Promise<UserReturnSchema> {

        const hashPassoword = await bcrypt.hash(body.password, 10);

        const newUser = {
            ...body,
            password: hashPassoword
        }

        const user = await prisma.user.create({ data: newUser });

        return userReturn.parse(user);
    }

    async login(body: UserLoginSchema): Promise<UserReturnSchema> {
        const user = await prisma.user.findUnique({ where: { email: body.email }});

        if (!user) {
            throw new appError(404, "User not exists");
        }

        const compare = await bcrypt.compare(body.password, user.password);

        if (!compare) {
            throw new appError(401, "Email and password doesn't match");
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expireIn: "2h" });

        return { acessToken: token, user: userReturn.parse(user) };
    }

    async getUser(id: string): Promise<UserReturnSchema> {

        const user = await prisma.user.findUnique({ where: { id: +id}});

        return userReturn.parse(user);
    }

}