const express = require('express')
const cors = require('cors')
const axios = require('axios')
require("dotenv").config()
const ratesRouter = require('./routes/rates')


const app = express()
const PORT = process.env.PORT;

app.use(cors())
app.use(express.json())



app.use('/api/rates', ratesRouter)


app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})

