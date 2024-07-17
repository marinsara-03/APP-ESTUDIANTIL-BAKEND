const Router = require ('express');
const router = Router();


// import routes 
 

// Status api endpoint
router.get ('/api-status',(req,res)=> {
    res.send({'Status':'on'});
});
//use routes 
module.exports = router;