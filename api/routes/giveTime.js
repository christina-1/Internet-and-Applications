var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
router.post('/', urlencodedParser, function(req, res, next){
    
    // When input is given, redirect to showRoutes
    res.redirect(303,`/showRoutes/${req.body.time}`);
});


module.exports=router;
