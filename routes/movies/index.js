var express = require('express');
var createError = require('http-errors');
var router = express.Router();
var movies = require('../../movies.json');


router.get('/', function(req, res, next) {
    res.send(movies);
});
router.get('/:id', function(req, res, next) {
    var id = parseInt(req.params.id, 10)
    var movie = movies.filter(function(movie) {
        return movie.id === id
    });
    res.send(movie);
});



router.all('*', function(req, res, next) {
    next(createError(404, '파일이 없습니다.'));
});




module.exports = router;