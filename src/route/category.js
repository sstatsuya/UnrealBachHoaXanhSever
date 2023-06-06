const express = require("express"); 
const router = express.Router()
const Category = require('../model/category') // import file model ở trên vào
router.get('/', (req, res)=>{
    res.send("dday la trang Category")
})
router.get("/all", async (req, res) => {   
    try{
        const data = await Category.find({})
        res.json(data)
    } 
    catch(err){
        res.status(500).json({error: 'Error when get Category'})
    }
});
module.exports = router
