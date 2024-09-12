import { prisma } from "../database/prisma";
import { TBrandRegisterBody, TBrandSearch, TBrandUpdate } from "../schemas/brand.schema";

export class BrandServices {
    async create(brandId: number, body: TBrandRegisterBody): Promise<TBrandRegisterBody> {
        const data = await prisma.brand.create({data: {...body, brandId}}) 
        
        return data;
    }

    async findOne(brandName: string): Promise<TBrandSearch[]>{
           // const getAllAutomobiles = automobileDataBase.filter(automobile => automobile.name.toLowerCase().includes(name.toLowerCase()))
            
            const getBrand = await prisma.brand.findMany({ where: { name: brandName }});
            
            return getBrand;
        } 
        
    async update(id: number, body: TBrandUpdate): Promise<TBrandUpdate> {
        const data = await prisma.brand.update({where: {id}, data: body});
        
        return data;
    }

    async delete(id: number): Promise<void> {
        await prisma.brand.delete({where: {id}});
    } 
}


// const getBrand = prisma.filter(Brands.name => brand.name.toLowerCase().includes(name.toLowerCase()))