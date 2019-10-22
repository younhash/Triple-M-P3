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
export const cityRouter = Router()
const getCityByID = async (
    /**@type{express.Request}*/req,
    /**@type{express.Response}*/res) => {
    try{
        const id = req.params.id
        const city = await City.findOne({
            where: {id: id}
        })
        return res.status(200).json({city}) 
    }catch (error) {
        return res.status(500).send(error.message)
    }
}
cityRouter.get("/cities/:id", getCityByID)


export const userRouter = Router()
const addNewUser = (/** @type {express.Request} */req, /** @type {express.Response} */ res) => {
    let {firstName, lastName, alias} = req.body
    return User.create({firstName, lastName, alias}).then(user => {return res.status(200).json({created: user}) })
    .catch(error => {return res.status(500).send(error.message)})
}
const getAllUsers = async (
    /**@type{express.Request}*/req,
    /**@type{express.Response}*/res) => {
    try{
        const users = await User.findAll({})
        return res.status(200).json({users}) 
    }catch (error) {
        return res.status(500).send(error.message)
    }
}


userRouter.get('/users', getAllUsers)
userRouter.post("/users", addNewUser)