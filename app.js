require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// view engine setup
// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs');
app.set('views',[
  path.join(__dirname, '/views'),
  path.join(__dirname, '/views/other')
]);
// ************ Define la ubicación de la carpeta de las vistas ************

// ************ Route System require and use() ************
const otherRouter = require('./routes/other.routes')
// ************ 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));


// ************ Enrutadores ************
app.use('/', otherRouter);
// ************ 

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
  res.status(err.status || 500);
  res.render('other/error');
});

module.exports = app;
