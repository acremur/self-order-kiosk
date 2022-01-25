const Order = require("../models/Order")
const router = require('express').Router()

router.get('/', async (req, res) => {
    const orders = await Order.find({ 
        isDelivered: false,
        isCanceled: false
    })
    res.send(orders)
})

router.put('/:id', async (req, res) => {
    const order = await Order.findById(req.params.id)

    if (order) {
        if (req.body.action === 'ready') {
            order.isReady = true
            order.inProgress = false
        } else if (req.body.action === 'deliver') {
            order.isDelivered = true
        } else if (req.body.action === 'cancel') {
            order.isCanceled = true
        }

        await order.save()
        res.send({ message: 'Done' })
    } else {
        req.status(404).message({ message: 'Order not found' })
    }
    
})

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