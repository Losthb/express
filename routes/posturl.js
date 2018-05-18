/*
    create by huangben 2018-5-18
 */
var express = require('express');
var router = express.Router();

/* POST test listing. */
router.post('/', function (req, res, next) {
    const response = {
        "nodejs": req.body.nodejs
    };
    console.info(response);
    res.end(JSON.stringify(response));
});

module.exports = router;