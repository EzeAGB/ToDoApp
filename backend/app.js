var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const router = express.Router();
var cors = require('cors');
require('dotenv').config(); 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var usersTasks = require('./routes/tasks');
var usersGoals = require('./routes/goals');
const mysql = require('mysql');

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});
connection.connect((err) => {
  if (err) {
    console.error('Error when connecting to DB: ' + err.message);
    return;
  }
  else {
    console.log('Connected to DB successfully with id ' + connection.threadId);
  }
});

let queryCreateDB = 'CREATE DATABASE IF NOT EXISTS ' + process.env.DB_NAME;
let queryCreateTableGoals = 'CREATE TABLE IF NOT EXISTS goals ( \
  id int(11) NOT NULL auto_increment, \
  name varchar(250) NOT NULL default \'\', \
  description varchar(250) NOT NULL default \'\', \
  dueDate varchar(250) NOT NULL default \'\', \
  PRIMARY KEY (id) \
  );';
let queryCreateTableTasks = 'CREATE TABLE IF NOT EXISTS tasks ( \
  id int(11) NOT NULL auto_increment, \
  name varchar(250) NOT NULL default \'\', \
  description varchar(250) NOT NULL default \'\', \
  dueDate varchar(250) NOT NULL default \'\', \
  PRIMARY KEY (id) \
  );';

connection.query(queryCreateDB, (err, results, fields) => {
  if (err) {
    console.error(err.message);
    return;
  }
  else {
    console.log(results);
    return;
  }
});

connection.query(queryCreateTableGoals, (err, results, fields) => {
  if (err) {
    console.error(err.message);
    return;
  }
  else {
    console.log(results);
    return;
  }
});

connection.query(queryCreateTableTasks, (err, results, fields) => {
  if (err) {
    console.error(err.message);
    return;
  }
  else {
    console.log(results);
    return;
  }
});

connection.end();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

router.use((req, res, next) => {
  if (req.headers.authorization && req.headers.authorization === '123456') {
    next();
  }
  else {
    res.status(401).json({ error: 'No se encontro autorización' });
  }
});

app.use('/', router);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tasks', usersTasks);
app.use('/goals', usersGoals);

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

module.exports = app;
