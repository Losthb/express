/*
    create by huangben 2018-5-18
 */
var express = require('express');
var router = express.Router();
var request = require('request');
/* HTTP test listing. */
router.get('/', function (req, res1, next,) {
    const httpurl = "http://192.168.3.42:9527/get?nodejs=httclient";
    let hbbody;
    request(httpurl, function (error, res, body, req) {
        if (!error && res.statusCode == 200) {
           console.log(body);
           hbbody = body;
        }
        res1.end(hbbody)
    });
});


module.exports = router;