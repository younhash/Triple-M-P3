import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import { allTrailsRouter, allCitiesRouter } from './routes'

const app = express()

app.use(express.json())
app.use(logger('dev'))
app.use(cors())
app.get('/test', (req,res) =>{
    return res.header(200).send({greetings: "Let's go for a nice ride on our bikes"})
})
app.use("/", [allTrailsRouter, allCitiesRouter])

const PORT = 51011

app.listen(PORT)
console.log('The Server is surfing on Port::', PORT)