const mongoose = require('mongoose')

const Category = mongoose.model('categories', new mongoose.Schema({
    name: String,
    image: String
}))

module.exports = Category
