import {Request,Response} from "express";
import {IcountryRepository} from "../../domain";

export class CountryController{

    // Dep. Iny.
    constructor(
        private readonly countryRepository:IcountryRepository
    ) {
    }
    //CRUD READ
    getCountries = async(req:Request, res:Response) => {
        const countries = await this.countryRepository.getAll()
        return res.json(countries)
    }
    //CRUD READ
    getCountryById = async(req:Request, res:Response) => {
        const id:number = Number(req.params.id);
        if(isNaN(id)){
            return  res.status(400).json({error:`ID argument is not a number`})
        }

        try {
            const country = await  this.countryRepository.findById(id)
            res.json(country)
        }catch (err){
            res.status(400).json({err})
        }
    }
    //CRUD CREATE
    createCountry = async(req:Request, res:Response) => {
        const {name,key} = req.body;
        if(!name) {return res.status(400).json({error: `Country property is required`})}
        const country = await this.countryRepository.create(req.body)
        res.json(country)

    }
    //CRUD UPDATE
    updateCountry = async (req:Request, res:Response) => {
        const id:number = Number(req.params.id);
        if(isNaN(id)){
            return  res.status(400).json({error:`ID argument is not a number`})
        }
        const {name,key}=req.body;
        if(!name) {return res.status(400).json({error: `Name property is required`})}

        const updatedCountry = await this.countryRepository.updateById(req.body,id)
        return res.json(updatedCountry)
    }

    //CRUD DELETE
    deleteCountry = async (req:Request, res:Response) => {
        const id:number = Number(req.params.id);
        if(isNaN(id)){
            return  res.status(400).json({error:`ID argument is not a number`})
        }
        const deletedCountry = await this.countryRepository.deleteById(id)
        res.json(deletedCountry)
    }
}