require('dotenv').config()
const path = require('path')
const express = require('express')
const connectDb = require('./db/connect')

const app = express()
// const mainRoot = require('./routes')
const categoriesRoots = require('./routes/categories')
const productsRoots = require('./routes/products')
const ordersRoots = require('./routes/orders')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
connectDb()

// app.use('/', mainRoot)
app.use('/api/categories', categoriesRoots)
app.use('/api/products', productsRoots)
app.use('/api/orders', ordersRoots)

app.use(express.static(path.join(__dirname, './build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'))
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Serving on http://localhost:${PORT}`))