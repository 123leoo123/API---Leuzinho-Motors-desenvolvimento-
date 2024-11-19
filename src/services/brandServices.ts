import { prisma } from "../database/prisma";
import { TAutomobileSearch } from "../schemas/automobile.schema";
import { TBrandRegisterBody, TBrandSearch, TBrandUpdate } from "../schemas/brand.schema";

export class BrandServices {
    async create(brandId: number, body: TBrandRegisterBody): Promise<TBrandRegisterBody> {
        const data = await prisma.brand.create({data: {...body, brandId}}) 
        
        return data;
    }

    async findAll(brandName: string): Promise<TAutomobileSearch[]>{
           // const getAllAutomobiles = brandDataBase.filter(brand => brand.name.toLowerCase().includes(name.toLowerCase()))
            
            const getBrand = await prisma.brand.findMany({ where: { name: brandName }});
            
            return getBrand;

            // return getAllAutomobiles;
        } 
        
    async update(id: number, body: TBrandUpdate): Promise<TBrandUpdate> {
        const data = await prisma.brand.update({where: {id}, data: body});
        
        return data;
    }

    async delete(id: number): Promise<void> {
        await prisma.brand.delete({where: {id}});
    } 

    // async findAll(): Promise<TAutomobileSearch[]>{

    // }
}


// const getBrand = prisma.filter(Brands.name => brand.name.toLowerCase().includes(name.toLowerCase()))