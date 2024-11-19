import { z } from 'zod';

export const brandSchema = z.object({
    id: z.number().positive(),
    name: z.string().min(1),
    description: z.string().optional()
})

export type TBrand = z.infer<typeof brandSchema>;

export const brandRegisterBodySchema = brandSchema.omit({ id: true });

export type TBrandRegisterBody = z.infer<typeof brandRegisterBodySchema>;

export const brandSearchSchema = brandSchema.pick({ name: true });

export type TBrandSearch = z.infer<typeof brandSearchSchema>;

export const brandUpdateSchema = brandSchema.omit({ id: true }).optional();

export type TBrandUpdate = z.infer<typeof brandUpdateSchema>;

