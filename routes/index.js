var express = require('express');
var router = express.Router();
// var mysql = require('mysql')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
// router.use('/mysql', require('mysql'))

module.exports = router;