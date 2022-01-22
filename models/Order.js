const mongoose = require('mongoose')

const Order = mongoose.model('orders', new mongoose.Schema({
    number: { type: Number, default: 0 },
    orderType: String,
    paymentType: String,
    isPaid: { type: Boolean, default: false },
    isReady: { type: Boolean, default: false },
    inProgress: { type: Boolean, default: true },
    isCanceled: { type: Boolean, default: false },
    isDelivered: { type: Boolean, default: false },
    itemsPrice: Number,
    taxPrice: Number,
    totalPrice: Number,
    orderItems: [
        {
            name: String,
            price: Number,
            quantity: Number
        }
    ]
}, {
    timestamps: true
}))

module.exports = Order