const express = require('express')
const axios = require('axios')
const router = express.Router()

router.get('/', async (req,res)=>{
        const {baseCurrency} = req.query;
        const apiKey = process.env.API_KEY
        try{
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}?apikey=${apiKey}`)
        res.json(response.data)
        }
        catch(error){
         console.log(error)
         res.status(500).json({error: 'Failed to fetch exchange rates'})
        }
    })

module.exports = router