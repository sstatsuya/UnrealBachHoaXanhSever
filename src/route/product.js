const express = require("express"); 
const router = express.Router()
const Product = require('../model/product') // import file model ở trên vào
router.get('/', (req, res)=>{
    res.send("dday la trang Product")
})
router.get("/all", async (req, res) => {   
    try{
        const data = await Product.find({})
        res.json(data)
    } 
    catch(err){
        res.status(500).json({error: 'Error when get Products'})
    }
});
module.exports = router
