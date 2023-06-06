const express = require("express"); 
const router = express.Router()
const Alert = require('../model/alert') // import file model ở trên vào
router.get('/', (req, res)=>{
    res.send("dday la trang Alert")
})
router.get("/all", async (req, res) => {   
    try{
        const data = await Alert.find({})
        res.json(data)
    } 
    catch(err){
        res.status(500).json({error: 'Error when get Alerts'})
    }
});
module.exports = router
