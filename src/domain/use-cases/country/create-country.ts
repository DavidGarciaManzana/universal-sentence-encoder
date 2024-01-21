import {CountryEntity} from "../../entities/country.entity";
import {IcountryRepository} from "../../repositories/Icountry.repository";

export interface CreateCountryUseCase{
    execute(data:any):Promise<CountryEntity>
}

export class CreateCountry implements CreateCountryUseCase{
    constructor(
        private readonly repository:IcountryRepository
    ) {
    }

    execute(data: any): Promise<CountryEntity> {
        return this.repository.create(data)
    }

}