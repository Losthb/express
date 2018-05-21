/*
    create by huangben 2018-5-18
 */
var express = require('express');
var router = express.Router();
var request = require('request');
var www = require('../bin/www');

/* HTTP test listing. */
router.get('/', function (req, res, next) {
    const httpurl = `http://${www.ip}:9527/get?nodejs=hello`;
    request(httpurl, function (error, res, body, req) {
        if (!error && res.statusCode == 200) {
            console.log(body);
        }
    });
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.send('http sucess');
});


module.exports = router;