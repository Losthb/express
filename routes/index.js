/*
    create by huangben 2018-5-18
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  res.render('index', { title: 'Lovezdy' });
});

module.exports = router;
