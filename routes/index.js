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
  res.render('hello');
})

router.post('/hello', function(req, res){
  var ltiBody = req.body;
  
  function checkNonce(){
    var nonceHash = req.body.oauth_nonce;
    console.log(nonceHash);
    if(!nonceHash){
      return false;
    }else{
      if(Nonce.find({nonceId:nonceHash})){
        return false;
      }else{
        Nonce.create({nonceId:nonceHash})
        return true;
      }
    }
  }
  
  if(checkNonce()){
    res.send('Good')
  }else{
    res.send("Bad")
  }
  

})

module.exports = router;
