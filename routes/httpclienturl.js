/*
    create by huangben 2018-5-18
 */
var express = require('express');
var router = express.Router();
var request = require('request');
var http = require('../bin/www');

/* HTTP test listing. */
router.get('/', function (req, res1, next,) {
    const httpurl = `http://${http.ip1}:${http.port2}`+"/get?nodejs=httclient";
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