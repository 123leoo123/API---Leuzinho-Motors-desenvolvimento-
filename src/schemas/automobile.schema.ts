import { z } from 'zod';

export const automobileSchema = z.object({
    id: z.number().positive(),
    brand: z.string().min(1),
    model: z.string().min(1),
    year: z.number().int().positive(),
    plate: z.string().min(1),
    mileage: z.number().int().positive(),
    color: z.string().min(1),
    price: z.number().int().positive(),
    options: z.array(z.string()),
    description: z.string().optional(),
    brandId: z.number().positive(),
    userId: z.number().positive(),
});

export type TAutomobile = z.infer<typeof automobileSchema>;

export const automobileRegisterBodySchema = automobileSchema.omit({ id: true, brand: true, userId: true });

export type TAutomobileRegisterBody = z.infer<typeof automobileRegisterBodySchema>;

export const automobileSearchSchema = automobileSchema.pick({ brand: true, model: true});

export type TAutomobileSearch = z.infer<typeof automobileSearchSchema>;

export const automobileUpdateSchema = automobileSchema.omit({ id: true }).partial();

export type TAutomobileUpdate = z.infer<typeof automobileUpdateSchema>;