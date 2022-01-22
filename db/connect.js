const mongoose = require('mongoose')

const connectDb = () => {
    mongoose.connect(process.env.REACT_APP_MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => console.log('Connected to MongoDb'))
}

module.exports = connectDb