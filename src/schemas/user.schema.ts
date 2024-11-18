import { z } from 'zod';

export const userSchema = z.object({
    id: z.number().positive(),
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(8),
    residence: z.any().promise()
});

export const UserCreate = userSchema.omit({ id: true });

export type UserCreateSchema = z.infer<typeof UserCreate>;

export const userReturn = userSchema.omit({ password: true });

export type UserReturnSchema = z.infer<typeof userReturn>;

export const userLogin = userSchema.omit({ name: true, residence: true, id: true });

export type UserLoginSchema = z.infer<typeof userLogin>;

export type UserLoginReturn = {
    acessToken: string;
    user: UserReturnSchema;
}