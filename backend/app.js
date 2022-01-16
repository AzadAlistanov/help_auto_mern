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
const signupRouter = require('./routes/user/signup');
const signinRouter = require('./routes/user/signin');
const logoutRouter = require('./routes/user/logout');
const mastersignupRouter = require('./routes/master/signup');
const mastersigninRouter = require('./routes/master/signin');
const masterlogoutRouter = require('./routes/master/logout');
const userprofileRouter = require('./routes/user/userprofile');
const userprofilecomponentsRouter = require('./routes/user/userprofilecomponents');
const useravatarRouter = require('./routes/user/useravatar');
const bodyParser = require('body-parser');
const formData = require("express-form-data");



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
const orderList = require('./routes/orderList');


app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({extended: true}));
app.use('/images', express.static(path.join(__dirname, 'images')))
// app.use(express.json({}));
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use(cors({ credentials: true, origin: '*' }));

app.use(cookieParser());
app.use(session(sessionConfig));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));




app.use('/signup', signupRouter);
app.use('/signin', signinRouter);
app.use('/logout', logoutRouter);
app.use('/mastersignup', mastersignupRouter);
app.use('/mastersignin', mastersigninRouter);
app.use('/userprofile/:id', userprofileRouter);
app.use('/userprofilecomponents/:id', userprofilecomponentsRouter);
app.use('/useravatarRouter', useravatarRouter);
app.use('/', home);
app.use('/servicelist', serviceList);
app.use('/orderlist/:id', orderList);

module.exports = app;
