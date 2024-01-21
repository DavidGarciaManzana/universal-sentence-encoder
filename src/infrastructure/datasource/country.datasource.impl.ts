import {IcountryDatasource, CountryEntity} from "../../domain";
import {prisma} from "../../data/postgres";

export class CountryDatasourceImpl implements IcountryDatasource {
    async getAll(): Promise<CountryEntity[]> {
        const countries = await prisma.country.findMany()
        const answer = countries.map(country=>CountryEntity.fromObject(country))
        return countries.map(country=>CountryEntity.fromObject(country));
    }
    async findById(id: number): Promise<CountryEntity> {
        const country = await prisma.country.findFirst({
            where:{
                id:id
            }
        })
        if(!country){
            throw `Country with id ${id} not found`
        }
        return CountryEntity.fromObject(country);
    }
    async create(data: any): Promise<CountryEntity> {
        const newCountry = await prisma.country.create({
            data:{
                name:data.name,
                key:data.key
            }
        });
        return CountryEntity.fromObject(newCountry)
    }
    async updateById(data: any,id:number): Promise<CountryEntity> {
        await this.findById(id)
        const updatedCountry = await prisma.country.update({
            where: {
                id: id,
            },
            data: {
                name:data.name,
                key:data.key
            },
        })
        return CountryEntity.fromObject(updatedCountry)
    }


    async deleteById(id: number): Promise<CountryEntity> {
        await this.findById(id)
        const deletedCountry = await prisma.country.delete({
                where:{id:id}
        });

        return CountryEntity.fromObject(deletedCountry)
    }
}