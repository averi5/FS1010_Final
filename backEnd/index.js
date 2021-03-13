import express from 'express'
import argon2 from 'argon2'
import routes from './src/routes.js'
import * as jwt from 'jsonwebtoken'
import jwtVerify from './src/jwtVerify.js'
const dbhandler = require('./src/db')
const app = express()
const cors = require('cors')

app.use(cors())

const PORT = process.env.PORT || 4000
// allows us to parse json 
app.use(express.json())

app.use((req, res, next) => {
    // global before middleware
    console.log(`Requested URI: ${req.originalUrl}`)
    next()
})

app.use((req, res, next) => {
    // global after midleware
    next()
    console.log(`Finished request: ${req.originalUrl}`)
})

app.post('/auth', async (req, res) => {
    const user = await dbhandler.validateUser(req.body.email, req.body.password)
    if (user){
        const token = jwt.sign({user}, process.env.JWT_SECRET, {expiresIn: '1m'})
        return res.send({token})
    } 
    return res.status(401).json({message: "incorrect credentials provided"})
})

app.get('/contact_form/entries', jwtVerify, async (req, res)=>{
    return res.status(200).json(await dbhandler.getAllEntries())
})

app.get('/contact_form/entries/:id', jwtVerify, async (req, res)=>{
    //check for id
    const entryId = await dbhandler.getItemById(req.params.id)
    if (entryId != null){
        return res.status(200).json(entryId)
    } else {
        return res.status(404).json({message: `entry ${req.params.id} not found`})
    }
})

app.use('/', routes)

export default app.listen(PORT, () => console.log(`API server ready on http://localhost:${PORT}`))
