const mongoose = require('mongoose')

const Product = mongoose.model('products', new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    price: Number,
    calorie: Number,
    category: String
}))

module.exports = Product