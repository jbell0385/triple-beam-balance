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
  var nonceHash = litBody.oauth_nonce;
  console.log(nonceHash);
  res.send(nonceHash);
})

module.exports = router;
