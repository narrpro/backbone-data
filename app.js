const createError = require('http-errors');
const express = require('express');
const history = require('connect-history-api-fallback');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api', require('./routes/api'));
app.use('/user', require('./routes/api/user'));
// app.use('/mysql', require('./routes'));
app.use(history());

app.use(express.static(path.join(__dirname, '../', 'fvue', 'dist')));
if (process.env.NODE_ENV !== 'production') app.use(cors())

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    //     res.status(err.status || 500);
    //     res.sendr('error');
    // });
    res.status(err.status || 500);
    res.send({ msg: err.message });
});

module.exports = app;