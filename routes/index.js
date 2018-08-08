var express = require('express');
var router = express.Router();
var mongoose=require("mongoose");

var nonceSchema = new mongoose.Schema({
    nonceId: String
})

var Nonce = mongoose.model("Nonce", nonceSchema);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/hello', (req,res)=>{
  // console.log(req.params);
  Nonce.create({"nonceId":"alskdfj;alksdjf"},(err, newNonce)=>{
    if(err){
      console.log(err)
    }else{
      console.log(newNonce);
    }
  })
  
  res.render('hello');
})

router.post('/hello', function(req, res){
  var ltiBody = req.body;
  console.log('ltiBody: ', ltiBody);


  
  
  async function processLtiRequest(){
    if(await checkNonce()){
      console.log("processed")
      res.send('Good')
    }else{
      console.log('processed')
      res.send("Bad")
    }
  }

  processLtiRequest();

})

module.exports = router;
