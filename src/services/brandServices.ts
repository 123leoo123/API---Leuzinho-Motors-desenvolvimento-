import { injectable } from "tsyringe";
import { prisma } from "../database/prisma";
import { TAutomobileSearch } from "../schemas/automobile.schema";
import { TBrandRegisterBody, TBrandSearch, TBrandUpdate } from "../schemas/brand.schema";
import { Brand } from "@prisma/client";

@injectable()
export class BrandsServices {
    // função para administrador da API, para criar uma marca de automóvel
    async create( brand: Brand): Promise<Brand> {
        
        const data = await prisma.brand.create({data: brand}); 
        
        return data;
    }

    // função para usuários para buscar os automóveis pela marca
    async findOne(brandName: string): Promise<TBrandSearch[]>{
           // const getAllAutomobiles = prisma.filter(brand => brand.name.toLowerCase().includes(name.toLowerCase()))
            
            const getBrand = await prisma.brand.findMany({ where: { name: brandName }});
            
            return getBrand;

            // return getAllAutomobiles;
        } 

    async findAll(): Promise<TBrandSearch[]> {
        const data = await prisma.brand.findMany();
        
        return data;
    }
     
    // função para administrador da API, para atualizar a marca de automóvel
    async update(id: number, body: TBrandUpdate): Promise<TBrandUpdate> {
        const data = await prisma.brand.update({where: {id}, data: body});
        
        return data;
    }

    // função para administrador da API, para deletar a marca de automóvel
    async delete(id: number): Promise<void> {
        await prisma.brand.delete({where: {id}});
    } 
}


