import { injectable } from "tsyringe";
import { prisma } from "../database/prisma";
import { TAutomobile, TAutomobileRegisterBody, TAutomobileSearch, TAutomobileUpdate } from "../schemas/automobile.schema";

@injectable()
export class AutomobilesServices {

    async create(userId: string,  body: TAutomobileRegisterBody): Promise<TAutomobile> {
        const data = await prisma.automobile.create({data: {...body, userId: +userId }}) 
        // const data = await prisma.automobile.create({data: {...body, brandId: +brandId, userId: +userId }, include: {brand: true}})
        return data;
    }

    async findMany(brandAuto: string): Promise<TAutomobileSearch[]>{
           // const getAllAutomobiles = automobileDataBase.filter(automobile => automobile.name.toLowerCase().includes(name.toLowerCase()))
            
            const getAllAutomobiles = await prisma.automobile.findMany({ where: { brand: {name: brandAuto} }, include: {brand: true}});
            
            return getAllAutomobiles;
        }
        
    // async findAll(userId: string): Promise<TAutomobileRegisterBody[]> {
        // buscar todos anúncios do usuário
    // }
        
    async update(id: number, body: TAutomobileUpdate): Promise<TAutomobileUpdate> {
        const data = await prisma.automobile.update({where: {id}, data: body});
        
        return data;
    }

    async delete(id: number): Promise<void> {
        await prisma.automobile.delete({where: {id}});
    }   

} 
    // async findOne(automobile: TAutomobile): TAutomobile {
    //     return automobile;
    // }
