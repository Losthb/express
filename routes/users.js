/*
    create by huangben 2018-5-18
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  res.send('respond with a resource');
});

module.exports = router;
