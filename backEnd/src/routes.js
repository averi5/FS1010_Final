import express from 'express';
import argon2 from 'argon2';
import { v4 as uuidv4 } from 'uuid';
const dbhandler = require('./db')
const router = express.Router();

const reqEntFields = ["name", "email", "phoneNumber", "content"]
const reqUserFields = ['name', 'password', 'email']

const getMissingProps = (reqField, formEntry) => {
    // we can use filter to return an array of missing properties
    return reqField.filter(prop => !formEntry.hasOwnProperty(prop))
}

const checkEmail = (req, res, next) => {
    const emailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (req.body == null || !req.body.email.match(emailValid) ){
        return res.status(400).json({message: 'Invalid Email'})
    }
    next()
}

const validateForm = (req, res, next) => {
    let error =[]
    const formEntry = req.body
    const isValid = getMissingProps(reqEntFields, formEntry).map(prop => error.push(prop))

    if (isValid.length){
        return res.status(400).json({message: 'validation error', invalid: error})
    }
    next()
}
const validateUser = (req, res, next) => {
    let error =[]
    const formEntry = req.body
    const isValid = getMissingProps(reqUserFields, formEntry).map(prop => error.push(prop))

    if (isValid.length){
        return res.status(400).json({message: 'validation error', invalid: error})
    } else if (req.body.password.length < 8){
        return res.status(400).json({message: 'Invalid Password'})
    } 
    next()
}

router.post('/contact_form/entries', checkEmail, validateForm, async (req, res) => {
    req.body.id = uuidv4()
    await dbhandler.createItem(req.body)
    return res.status(201).json(req.body)
})

router.post('/users', checkEmail, validateUser, async (req, res) => {
    req.body.id = uuidv4()
    req.body.password = await argon2.hash(req.body.password)
    await dbhandler.createItem(req.body)
    let user = req.body
    delete user.password
    return res.status(201).json(user)
})

export default router