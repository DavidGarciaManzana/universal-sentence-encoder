import {CountryEntity} from "../../entities/country.entity";
import {IcountryRepository} from "../../repositories/Icountry.repository";

export interface UpdateCountryUseCase{
    execute(data:any,id:number):Promise<CountryEntity>
}

export class UpdateCountry implements UpdateCountryUseCase{
    constructor(
        private readonly repository:IcountryRepository
    ) {
    }

    execute(data: any,id:number): Promise<CountryEntity> {
        return this.repository.updateById(data,id)
    }

}