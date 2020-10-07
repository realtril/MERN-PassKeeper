const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
//connect to DB
mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true },
  () => console.log('connected to DB!'),
);

//Import Routes
const authRoute = require('./routes/auth');
const passwordsRoute = require('./routes/passwords');

//Middlewares
app.use(express.json());

//Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/passwords', passwordsRoute);

app.listen(process.env.PORT, () =>
  console.log(`Server is Up An Running on PORT ${process.env.PORT}!`),
);
