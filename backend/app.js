const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cors = require('cors');
const { app, serverStart } = require('./server');
const { connect } = require('./db');


serverStart().then(connect);

const sessionConfig = {
  store: new FileStore(),
  name: 'sid',
  secret: process.env.SESSION_SECRET ?? ['keyboard cat', 'old keyword'],
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
    // secure: process.env.NODE_ENV === 'development',
  },
};

const home = require('./routes/home');
const serviceList = require('./routes/serviceList');


app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ credentials: true, origin: '*' }));


app.use('/', home);
app.use('/servicelist', serviceList);


// app.use(cookieParser());
// app.use(session(sessionConfig));

// const indexRouter = require('./routes/index');
// const addTask = require('./routes/addTask');
// const deleteRouter = require('./routes/delete');
// const changeRouter = require('./routes/change');
// const importantRouter = require('./routes/important');
// const logoutRouter = require('./routes/logout');

// app.use((req, res, next) => {
//   res.locals.name = req.session.user;
//   res.locals.id = req.session.userid;
//   next();
// });

// app.use('/api', indexRouter);
// app.use('/addTask', addTask);
// app.use('/delete', deleteRouter);
// app.use('/change', changeRouter);
// app.use('/important', importantRouter);
// // app.use('/logout', logoutRouter);
