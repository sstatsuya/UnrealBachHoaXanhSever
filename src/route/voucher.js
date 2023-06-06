const express = require("express"); 
const router = express.Router()
const Voucher = require('../model/voucher') // import file model ở trên vào
router.get('/', (req, res)=>{
    res.send("dday la trang Voucher")
})
router.get("/all", async (req, res) => {   
    try{
        const data = await Voucher.find({})
        res.json(data)
    } 
    catch(err){
        res.status(500).json({error: 'Error when get Vouchers'})
    }
});
module.exports = router
