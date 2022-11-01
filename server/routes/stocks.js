const express = require('express');
const router = express.Router();


//routes will return server response
//routes can point to further middleware
router.get('/', (req, res)=> {
    return res.status(200).json({stock:'info'});
})

module.exports = router;