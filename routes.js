import express from 'express'
import { Router } from 'express'
import {Trail, City, User} from './models'
const getAllTrails = async (
    /** @type{express.Request}*/ req,
    /** @type{express.Response}*/ res
    ) => {
        try{
            const trails = await Trail.findAll()
            console.log("trails", Trail);
            
            return res.status(200).json({trails}) 
        }catch (error) {
            return res.status(500).send(error.message)
        }
    }
export const allTrailsRouter = Router()
allTrailsRouter.get("/trails", getAllTrails)

export const allCitiesRouter = Router() 
const getAllCities = async (
    /**@type{express.Request}*/req,
    /**@type{express.Response}*/res) => {
    try{
        const cities = await City.findAll({})
        return res.status(200).json({cities}) 
    }catch (error) {
        return res.status(500).send(error.message)
    }
}
allCitiesRouter.get("/cities",getAllCities)