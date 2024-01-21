import {CountryEntity} from "../../entities/country.entity";
import {IcountryRepository} from "../../repositories/Icountry.repository";

export interface GetCountryUseCase{
    execute(id:number):Promise<CountryEntity>
}

export class GetCountry implements GetCountryUseCase{
    constructor(
        private readonly repository:IcountryRepository
    ) {
    }

    execute(id: number): Promise<CountryEntity> {
        return this.repository.findById(id)
    }

}