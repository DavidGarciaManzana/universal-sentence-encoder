import {Request,Response} from "express";
import {IcountryRepository, CreateCountry, DeleteCountry, GetCountries, GetCountry, UpdateCountry} from "../../domain";

export class CountryController{

    // Dep. Iny.
    constructor(
        private readonly countryRepository:IcountryRepository
    ) {
    }
    //CRUD READ
    getCountries = (req:Request, res:Response) => {
        new GetCountries(this.countryRepository)
            .execute()
            .then(countries => res.json(countries))
            .catch(error=> res.status(400).json({error}))
    }
    //CRUD READ
    getCountryById = (req:Request, res:Response) => {
        const id:number = Number(req.params.id);
        if(isNaN(id)){
            return  res.status(400).json({error:`ID argument is not a number`})
        }

        new GetCountry(this.countryRepository)
            .execute(id)
            .then(country => res.json(country))
            .catch(error=> res.status(400).json({error}))
    }
    //CRUD CREATE
    createCountry = (req:Request, res:Response) => {
        const {name,key} = req.body;
        if(!name) {return res.status(400).json({error: `Country property is required`})}
        new CreateCountry(this.countryRepository)
            .execute(req.body)
            .then(country => res.json(country))
            .catch(error=> res.status(400).json({error}))

    }
    //CRUD UPDATE
    updateCountry =  (req:Request, res:Response) => {
        const id:number = Number(req.params.id);
        if(isNaN(id)){
            return  res.status(400).json({error:`ID argument is not a number`})
        }
        const {name,key}=req.body;
        if(!name) {return res.status(400).json({error: `Name property is required`})}

        new UpdateCountry(this.countryRepository)
            .execute(req.body,id)
            .then(country => res.json(country))
            .catch(error=> res.status(400).json({error}))

    }

    //CRUD DELETE
    deleteCountry =  (req:Request, res:Response) => {
        const id:number = Number(req.params.id);
        if(isNaN(id)){
            return  res.status(400).json({error:`ID argument is not a number`})
        }
        new DeleteCountry(this.countryRepository)
            .execute(id)
            .then(country => res.json(country))
            .catch(error=> res.status(400).json({error}))

    }
}