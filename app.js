const e = require('express')
const express = require('express')
const app = express()
const morgan = require("morgan")
const router = require("./routes/gift-exchange")

app.use(morgan("tiny"))
app.use(express.json())
app.get('/', (req,res) => {
    res.status(200).json({"ping":"pong"})
})

app.use("/gift-exchange", router)

function generic(error,req,res,next){
   var stat = error.status ? error.status :  500;
   var msg = error.message ? error.message : "Something went wrong with the application";


   res.status(stat).json({
    error : {
        status : stat,
        message : msg,

    },

   })
     
   

}


module.exports = app;
