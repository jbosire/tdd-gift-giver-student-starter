//const e = require('express')
const express = require('express')
const app = express()
const morgan = require("morgan")
const router = require("./routes/gift-exchange")
const { NotFoundError } = require('./utils/errors')

app.use(morgan("tiny"))
app.use(express.json())

app.get('/', (req,res) => {
    res.status(200).json({"ping":"pong"})
})

app.use("/gift-exchange", router)

app.use((req,res,next) =>{
    return next(new NotFoundError)
})

app.use((error,req,res,next) => {
    const status = error.status || 500;
    const message = error.message 

    return res.status(status).json({
        error:{message,status}
    })

})





module.exports = app;
