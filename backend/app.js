const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
require('dotenv').config();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const passportLocalMongoose = require('passport-local-mongoose');
const User = require('./Models/User'); // Correct the path as needed
require('./database/database');
const journeyRouter = require('./Routes/Journeys.js');
const userRouter = require('./Routes/Users.js');

const PORT = process.env.PORT || 8001;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// const URL = process.env.MONGODB_URL;

// mongoose.connect(URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const connection = mongoose.connection;

// connection.once('open', () => {
//   console.log('MongoDB is Connected!');
// });

app.use(session({
  secret: 'secret',
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.use('/user', userRouter);
app.use('/journey', journeyRouter);

app.listen(PORT, () => {
  console.log(`The server is listening on port: ${PORT}`);
});