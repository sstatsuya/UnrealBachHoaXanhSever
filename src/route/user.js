const express = require("express"); 
const router = express.Router()
const User = require('../model/user') // import file model ở trên vào
router.get('/', (req, res)=>{
    res.send("dday la trang User")
})
router.get("/all", async (req, res) => {   
    try{
        const data = await User.find({})
        res.json(data)
    } 
    catch(err){
        res.status(500).json({error: 'Error when get Users'})
    }
});
module.exports = router
