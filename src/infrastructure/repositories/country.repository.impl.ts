import {IcountryDatasource, CountryEntity, IcountryRepository} from "../../domain";

export class CountryRepositoryImpl implements IcountryRepository{

    constructor(
        private readonly datasource:IcountryDatasource
    ) {
    }
    getAll(): Promise<CountryEntity[]> {
        return this.datasource.getAll()
    }
    findById(id: number): Promise<CountryEntity> {
        return this.datasource.findById(id)
    }

    create(data: any): Promise<CountryEntity> {
        return this.datasource.create(data)
    }
    updateById(data: any,id:number): Promise<CountryEntity> {
        return this.datasource.updateById(data,id)
    }

    deleteById(id: number): Promise<CountryEntity> {
        return this.datasource.deleteById(id)
    }


}