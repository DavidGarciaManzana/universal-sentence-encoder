import {CountryEntity} from "../entities/country.entity";

export abstract class IcountryDatasource {
    abstract create(data:any):Promise<CountryEntity>;
    abstract getAll():Promise<CountryEntity[]>
    abstract findById(id:number):Promise<CountryEntity>
    abstract updateById(data:any,id:number):Promise<CountryEntity>
    abstract deleteById(id:number):Promise<CountryEntity>

}