import { prisma } from "../database/prisma";
import { TAutomobile, TAutomobileRegisterBody, TAutomobileSearch, TAutomobileUpdate } from "../schemas/automobile.schema";

export class AutomobileServices {

    async create(automobileId: number, body: TAutomobileRegisterBody): Promise<TAutomobile> {
        const data = await prisma.automobile.create({data: {...body, automobileId}}) 
        
        return data;
    }

    async findMany(nameAutomobile: string): Promise<TAutomobileSearch[]>{
           // const getAllAutomobiles = automobileDataBase.filter(automobile => automobile.name.toLowerCase().includes(name.toLowerCase()))
            
            const getAllAutomobiles = await prisma.automobile.findMany({ where: { name: nameAutomobile }});
            
            return getAllAutomobiles;
        } 
        
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
