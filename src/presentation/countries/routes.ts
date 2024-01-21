import {Router} from "express";
import {CountryController} from "./controller";
import {CountryDatasourceImpl} from "../../infrastructure/datasource/country.datasource.impl";
import {CountryRepositoryImpl} from "../../infrastructure/repositories/country.repository.impl";

export class CountryRoutes{
    static get routes():Router{
        const router = Router();
        //If you want to change the datasource you only have to change it here
        const datasource = new CountryDatasourceImpl()
        const countryRepository = new CountryRepositoryImpl(datasource)

        const countryController = new CountryController(countryRepository)
        router.get('/',(req,res) =>countryController.getCountries(req,res) )
        router.get('/:id',(req,res) =>countryController.getCountryById(req,res) )
        router.post('/',(req,res) =>countryController.createCountry(req,res) )
        router.put('/:id',(req,res) =>countryController.updateCountry(req,res) )
        router.delete('/:id',(req,res) =>countryController.deleteCountry(req,res) )
        return router
    }
}