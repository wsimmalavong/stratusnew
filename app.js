const express = require('express');
const router = express.Router();

router.get('/comicinfo' , (request, response)=>{
    res.json({"Hello" : "Hello"})
});

router.get('/weather', (request, response)=>{
    res.json({"Hello" : "Hello"})
});


module.exports = router;