/*
    create by huangben 2018-5-18
 */
var express = require('express');
var router = express.Router();

/* put test listing. */
router.delete('/', function (req, res, next) {
    console.log(req.body);
    res.send(JSON.stringify(req.body));
});

module.exports = router;