/*
    create by huangben 2018-5-18
 */
var express = require('express');
var router = express.Router();

/* GET test listing. */
router.get('/', function(req, res, next) {
    const json = req.query;
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.send(JSON.stringify(json));
});

module.exports = router;