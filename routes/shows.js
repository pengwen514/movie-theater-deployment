const express = require('express')
const router = express.Router()
const Show = require('../models/Show.js')
const {check, validationResults} = require('express-validator')

//GET ALL SHOWS
router.get('/', async (req, res) => {
    const shows = await Show.findAll()
    res.send(shows)
});
//GET ONE SHOW
router.get('/:id', async (req, res, next) => {
    try{
        const show = await Show.findByPk(req.params.id)
        res.send(show);
    }
    catch(error){
        next(error)
    }
})
//GET SHOWS OF A GENRE
router.get('/genres/:genre', async (req, res, next) => {
    try{
        const shows = await Show.findAll({where: {genre: req.params.genre}})
        res.send(shows);
    }
    catch(error){
        next(error)
    }
})
//PUT RATING OF WATCHED SHOW
router.put('/:id', async (req, res, next) => {
    try{
        const show = await Show.update(
            req.body, {where: {id: req.params.id}
    })
    res.sendStatus(200)
    }
    catch(error){
        next(error)
    }
})
//PUT STATUS OF SHOW

//DELETE A SHOW
router.delete('/:id', async (req, res, next) => {
    try{
        const show = await Show.destroy({
            where: {id: req.params.id}
        })
        res.sendStatus(200)
    }
    catch(error){
        next(error)
    }
})

module.exports = router