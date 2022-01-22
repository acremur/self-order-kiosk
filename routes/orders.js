const Order = require("../models/Order")
const router = require('express').Router()

router.post('/', async (req, res) => {
    const lastOrder = await Order.find().sort({ number: -1 }).limit(1)
    const lastNumber = lastOrder.length === 0 ? 0 : lastOrder[0].number

    if (
        !req.body.orderType ||
        !req.body.paymentType ||
        !req.body.orderItems ||
        !req.body.orderItems.length === 0
    ) {
        return res.status(400).send({  message: 'Data is required.' })
    }

    const order = await Order({ ...req.body, number: lastNumber + 1 }).save()
    res.status(201).send(order)
})

module.exports = router