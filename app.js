var createError = require('http-errors');
var express = require('express');
var path = require('path');
const dotenv = require("dotenv");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const setLanguage = require("./middleware/setLocales");
var indexRouter = require('./routes/index');
var dealerRouter = require('./routes/dealer');
var customerRouter = require('./routes/customer');
var dealerStocksRouter = require('./routes/dealerStocks');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');

// view engine setup
app.use(express.static('./angular/dist/dms'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
dotenv.config();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(setLanguage);
app.use(cors({
  origin: '*'
}));
app.use('/', express.static(path.join(__dirname, "dist")))
// app.use('/', indexRouter);
app.use("/dealer", dealerRouter);
app.use("/customer", customerRouter);
app.use("/dealerStocks", dealerStocksRouter);

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
  res.render('error');
});


app.listen(process.env.PORT);
    console.log(`Server is listening port ${process.env.CLIENT_URL}:` +"port:"+ process.env.PORT);


