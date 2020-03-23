var express = require('express');
var createError = require('http-errors');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express' });
// });
router.get('/', function(req, res, next) {
    res.send({ msg: 'test:mathq입니다', a: 222 });
});



router.all('*', function(req, res, next) {
    next(createError(404, '파일이 없습니다.'));
});




module.exports = router;