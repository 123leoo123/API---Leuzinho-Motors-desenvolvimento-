import { z } from 'zod';

export const brandSchema = z.object({
    id: z.number().positive(),
    name: z.string().min(1),
    description: z.string().optional(),
    models: z.array(z.string()),
    modelsCount: z.number().int().positive(),
})

export type TBrand = z.infer<typeof brandSchema>;

export const brandRegisterBodySchema = brandSchema.omit({ id: true, models: true, modelsCount: true });

export type TBrandRegisterBody = z.infer<typeof brandRegisterBodySchema>;

export const brandSearchSchema = brandSchema.pick({ name: true });

export type TBrandSearch = z.infer<typeof brandSearchSchema>;

export const brandUpdateSchema = brandSchema.omit({ id: true }).partial();

export type TBrandUpdate = z.infer<typeof brandUpdateSchema>;

