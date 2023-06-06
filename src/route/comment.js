const express = require("express"); 
const router = express.Router()
const Comment = require('../model/comment') // import file model ở trên vào
router.get('/', (req, res)=>{
    res.send("dday la trang Comment")
})
router.get("/all", async (req, res) => {   
    try{
        const data = await Comment.find({})
        res.json(data)
    } 
    catch(err){
        res.status(500).json({error: 'Error when get Comments'})
    }
});
module.exports = router
