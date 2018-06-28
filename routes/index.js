var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/hello', (req,res)=>{
  // console.log(req.params);
  res.render('hello');
})

router.post('/hello', function(req, res){
  var p = req;
  console.log(req);
  res.send(JSON.stringify(req.body));
})

module.exports = router;
