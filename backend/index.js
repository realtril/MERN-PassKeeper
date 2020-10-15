const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { notFound } = require('./helpers/errorMiddleware');
const { errorHandler } = require('./helpers/errorMiddleware');
const colors = require('colors');

dotenv.config();
//connect to DB
mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true },
  () => console.log('connected to DB!'.cyan.bold.underline),
);

//Import Routes
const authRoute = require('./routes/auth');
const passwordsRoute = require('./routes/passwords');

//Middlewares
app.use(cors());
app.use(express.json());

//Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/passwords', passwordsRoute);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold,
  ),
);
