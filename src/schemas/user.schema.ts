import { z } from 'zod';

export const userSchema = z.object({
    id: z.number().positive(),
    name: z.string().min(1),
    email: z.string().email(),
    cpf: z.string().length(11),
    password: z.string().min(8),
});

export const UserCreate = userSchema.omit({ id: true });

export type UserCreateSchema = z.infer<typeof UserCreate>;

// export const userReturn = userSchema.omit({ password: true });
export const userReturn = userSchema.pick({ id: true, name: true, email: true});

export type UserReturnSchema = z.infer<typeof userReturn>;

// export const userLogin = userSchema.omit({ name: true, residence: true, id: true }); 
export const userLogin = userSchema.omit({ name: true, id: true, cpf: true });

export type UserLoginSchema = z.infer<typeof userLogin>;

export type UserLoginReturn = {
    accessToken: string;
    user: UserReturnSchema;
}