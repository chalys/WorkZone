require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// ************ Configuración del motor de plantillas ************
app.set('view engine', 'ejs');
app.set('views',[
  path.join(__dirname, '/views'),
  path.join(__dirname, '/views/other'),
  path.join(__dirname, '/views/product'),
  path.join(__dirname, '/views/cart')  
]);
// ************ 

// ************ Middleware global ************
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));
// ************ 

// ************ Importación de rutas ************
const otherRouter = require('./routes/other.routes');
const productRouter = require('./routes/product.routes');
const cartRouter = require('./routes/cart.routes');
// ************ 

// ************ Uso de enrutadores ************
app.use('/', otherRouter); // Ruta principal
app.use('/productos', productRouter); // Ruta de productos
app.use('/carrito-compra', cartRouter);
// ************ 

// ************ Manejo de errores 404 ************
app.use(function(req, res, next) {
  next(createError(404));
});
// ************ 

// ************ Middleware para manejo de errores ************
app.use((err, req, res, next) => {
  // Configuración de variables locales para errores
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Renderiza la página de error
  res.status(err.status || 500);
  res.render('other/error'); // Asegúrate de que esta vista exista
});

// ************ Exportación del módulo ************
module.exports = app;
