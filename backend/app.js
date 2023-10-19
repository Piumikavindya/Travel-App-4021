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

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB is Connected!');
});



app.post('/user/signin', (req, res) => {
  const { Email, Password } = req.body;

  // Perform custom authentication logic to check if Email and Password match user data in your database
  User.findOne({ Email: Email, Password: Password })
    .then(user => {
      if (!user) {
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
      }

      // Authentication succeeded
      return res.status(200).json({ success: true, message: 'Signin successful' });
    })
    .catch(err => {
      return res.status(500).json({ success: false, message: 'Internal server error' });
    });
});


const journeyRouter = require('./Routes/Journeys.js');
const userRouter = require('./Routes/Users.js');

app.use('/journey', journeyRouter);
app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`The server is listening on port: ${PORT}`);
});
