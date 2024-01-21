import {CountryEntity} from "../../entities/country.entity";
import {IcountryRepository} from "../../repositories/Icountry.repository";

export interface DeleteCountryUseCase{
    execute(id:number):Promise<CountryEntity>
}

export class DeleteCountry implements DeleteCountryUseCase{
    constructor(
        private readonly repository:IcountryRepository
    ) {
    }

    execute(id: number): Promise<CountryEntity> {
        return this.repository.deleteById(id)
    }

}