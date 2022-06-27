const GiftExchange = require('../models/gift-exchange');

const express = require('express');

const router = express.Router()

router.post('/pairs', (req,res) => {
    res.status(200).json({"names" : []})
})

router.post('/traditional', (req,res) => {
    res.status(200).json({"names" : []})
})


module.exports = router;