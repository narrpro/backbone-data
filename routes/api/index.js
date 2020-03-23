const express = require('express');
const createError = require('http-errors');
const router = express.Router();


/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express' });
// });
// router.get('/hello', function(req, res, next) {
//     res.send({ msg: 'mathq입니다', a: 1 });
// });
router.get('/', function(req, res, next) {
    res.send({ msg: 'api입니다', a: 1 });
});


// router.use('/test', require('./test'))
router.use('/test', require('./test'))
router.use('/user', require('./user'))

router.all('*', function(req, res, next) {
    next(createError(404, '파일이 없습니다.'));
});

module.exports = router;