const data = require('../data')
const Product = require('../models/Product')

const router = require('express').Router()

router.get('/seed', async (req, res) => {
    try {
        const products = await Product.insertMany(data.products)
        res.status(201).send(products)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/', async (req, res) => {
    const { category } = req.query
    
    try {        
        const product = await Product.find(category ? { category } : {})
        res.status(200).send(product)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const newProduct = new Product(req.body)
        const savedProduct = await newProduct.save()
        res.status(201).send(savedProduct)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router