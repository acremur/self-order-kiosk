const data = require("../data")
const Category = require("../models/Category")

const router = require('express').Router()

router.get('/seed', async (req, res) => {   
    try {
        const categories = await Category.insertMany(data.categories)
        res.status(201).send(categories)
    } catch (error) { 
        res.status(400).send(error)
    }
})

router.get('/', async (req, res) => {  
    try {
        const category = await Category.find()
        res.status(200).send(category)
    } catch (error) { 
        res.status(500).send(error)
    }
})

module.exports = router