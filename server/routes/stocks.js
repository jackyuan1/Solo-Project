const express = require('express');
const router = express.Router();
const stocksController = require('../controllers/stocksController.js')

//routes will return server response
//routes can point to further middleware
router.post('/',  stocksController.getStock, (req, res)=> {
    console.log('eval response.locals', res.locals)
    return res.status(200).json(res.locals.data);
})

module.exports = router;