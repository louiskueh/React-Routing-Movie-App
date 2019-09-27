const express = require ('express')
const router = express.Router();

// router.use
router.get('/all',(req,res)=> {
    console.log('example')
});

module.exports = router