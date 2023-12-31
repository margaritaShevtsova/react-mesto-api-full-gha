/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const { celebrate, Joi, errors } = require('celebrate');
// eslint-disable-next-line import/no-extraneous-dependencies
const cookieParser = require('cookie-parser');
// eslint-disable-next-line import/no-extraneous-dependencies
const cors = require('cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const auth = require('./middlewares/auth');
const cardRouter = require('./routes/cards');
const userRouter = require('./routes/users');
const { login, createUser } = require('./controllers/users');
const { errorHandler } = require('./middlewares/errorHandler');
const NotFoundError = require('./errors/not-found-err');

const { PORT = 3000 } = process.env;

const app = express();
app.use(cookieParser());
app.use(helmet());

app.use(cors({ origin: 'https://shevtsova.mesto.nomoredomains.xyz', credentials: true }));

mongoose.connect('mongodb://127.0.0.1:27017/mestodb', {
  useNewUrlParser: true,
});

app.use(express.json());

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/signin', celebrate(
  {
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().min(8),
    }),
  },
), login);
app.post('/signup', celebrate(
  {
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().min(8),
      name: Joi.string().min(2).max(30),
      about: Joi.string().min(2).max(30),
      avatar: Joi.string().pattern(/^https?:\/\/(www\.)?[-a-zA-Z0-9-._~:/?#@!$&'()*+,;=/]{1,256}#?/),
    }),
  },
), createUser);

app.use(auth);

app.use(cardRouter, userRouter);

app.use('*', (req, res, next) => next(new NotFoundError('Такой страницы не существует')));

app.use(errorLogger);

app.use(errors());

app.use(errorHandler);

app.listen(PORT);
