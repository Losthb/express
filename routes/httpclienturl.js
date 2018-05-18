/*
    create by huangben 2018-5-18
 */
var express = require('express');
var router = express.Router();
var request = require('request');
/* HTTP test listing. */
router.get('/', function (req, res, next) {
    const httpurl = "http://192.168.3.42:9527/get?nodejs=hello";
    request(httpurl, function (error, res, body, req) {
        if (!error && res.statusCode == 200) {
            console.log(body);
        }
    });
    res.send('http sucess');
});


module.exports = router;