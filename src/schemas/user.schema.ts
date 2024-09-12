import { z } from 'zod';

export const userSchema = z.object({
    id: z.number().positive(),
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(8),
    residence: z.any()
})

export type TUser = z.infer<typeof userSchema>;

export const userRegisterBodySchema = userSchema.omit({ id: true });

export type TUserRegisterBody = z.infer<typeof userRegisterBodySchema>;

