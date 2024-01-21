import {CountryEntity} from "../../entities/country.entity";
import {IcountryRepository} from "../../repositories/Icountry.repository";

export interface GetCountriesUseCase{
    execute():Promise<CountryEntity[]>
}

export class GetCountries implements GetCountriesUseCase{
    constructor(
        private readonly repository:IcountryRepository
    ) {
    }

    execute(): Promise<CountryEntity[]> {
        return this.repository.getAll()
    }

}