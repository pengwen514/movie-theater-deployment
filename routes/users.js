const express = require('express')
const router = express.Router()
const User = require('../models/User.js')
const {check, validationResults} = require(express-validator)

//GET ALL USERS
router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.send(users)
});

//GET ONE USER
router.get('/:id', async (req, res, next) => {
    try{
        const user = await User.findByPk({where: {id: req.params.id}})
        res.sendStatus(200);
    }
    catch(error){
        next(error)
    }
})
//GET ALL SHOWS WATCHED BY USER
router.get('/:')

//PUT SHOW IF USER HAS WATCHED IT