import express from 'express'
import { Router } from 'express'
import {Trail, State, User} from './models'

///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// STATES (BELOW) /////////////////////////////////////////////
// get all states in single query
const getAllStates = async (
    /**@type{express.Request}*/req,
    /**@type{express.Response}*/res) => {
    try{
        const states = await State.findAll({})
        return res.status(200).json({states})
    }catch (error) {
        return res.status(500).send(error.message)
    }
}
export const allStatesRouter = Router()
allStatesRouter.get("/states", getAllStates)

// get single state info with all trails
const getStateByID = async (
    /**@type{express.Request}*/req,
    /**@type{express.Response}*/res) => {
    try{
        const id = req.params.id
        const state = await State.findOne({
            where: {id: id}
        })
        const trails = await Trail.findAll({
            where:{stateId:id}
        })
        
        // state['trails'] = trails;
        console.log(state);
        
        return res.status(200).json({state, trails}) 
    }catch (error) {
        return res.status(500).send(error.message)
    }
}

allStatesRouter.get("/states/:id", getStateByID)
////////////////////////////////////////// STATES (ABOVE) /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// USERS (BELOW) /////////////////////////////////////////////
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

const deleteUser = (/**@type{express.Request}*/req, /**@type{express.Response}*/res) => {
    return User.destroy({where: {id: req.params.id}}).then(user => {return res.status(200).json({deleted: user}) })
    .catch(error => {return res.status(500).send(errror.message)})
}

export const userRouter = Router()
userRouter.get('/users', getAllUsers)
userRouter.post("/users", addNewUser)
userRouter.delete("/users", deleteUser)
////////////////////////////////////////// USERS (ABOVE) /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// TRAILS (BELOW) /////////////////////////////////////////////
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

const getTrailByID = async (
    /**@type{express.Request}*/req,
    /**@type{express.Response}*/res) => {   
    try{
        const id = req.params.id
        const trails = await Trail.findOne({
            where: {id: id}
        })
        return res.status(200).json({trails}) 
    }catch (error) {
        return res.status(500).send(error.message)
    }
}

const updateTrail = (/** @type {express.Request} */ req, /** @type {express.Response} */ res)=>{
    return Trail.update(req.body, {where: {id: req.params.id}}).then(trail => {
        return res.status(200).json({updated: trail})
    }).catch(error => { return res.status(500).send(error.message)})
}

export const allTrailsRouter = Router()
allTrailsRouter.get("/trails", getAllTrails)
allTrailsRouter.get("/trails/:id", getTrailByID)
allTrailsRouter.put("/trails/:id/edit", updateTrail)
////////////////////////////////////////// TRAILS (ABOVE) /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
