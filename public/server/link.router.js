const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();



router.post('/', (req, res) => {
    console.log('server side data:', req.body);
    
    // axios
    //     .post(`https://api.tinyurl.com/create?api_token=${process.env.api_key}`)
    //     .then((response) => { //response in the server
    //         console.log(response.data);
    //         // res.send(response.data);//to send to client side
    //     }).catch((err) => {
    //         console.log(err);
    //     })
    
})

module.exports = router;