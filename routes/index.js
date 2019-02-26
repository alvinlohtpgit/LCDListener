var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// Method expects a JSON object to be send to it
// E.g {"line1": "Line 1", "line2": "Line 2"}
// then we just print the line onto the specified line on the LCD

router.post('/flash', function(req, res, next){

  var line1 = req.body.line1;
  var line2 = req.body.line2;



  if (line1){
    console.log("Line 1 : " + line1);
  }

  if (line2){
    console.log("Line 2 : " + line2);
  }

  res.send("Done");


});



module.exports = router;
