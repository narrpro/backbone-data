var express = require('express');
var createError = require('http-errors');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.send({ msg: 'user:mathq입니다', a: 222 });
});

router.post('/', (req, res, next) => {
    res.send({ sucess: true })
})
router.put('/', (req, res, next) => {
    res.send({ sucess: true })
})
router.delete('/', (req, res, next) => {
    res.send({ sucess: true })
})


router.all('*', function(req, res, next) {
    next(createError(404, '파일이 없습니다.'));
});




module.exports = router;