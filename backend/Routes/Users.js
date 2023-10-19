const router = require('express').Router();
const passport = require('passport');
const User = require('../Models/User');

router.route('/add').post((req, res) => {
  const { Name, Email, Password } = req.body;
  const newUser = new User({
    Name,
    Email,
    Password,
  });

  newUser
    .save()
    .then(() => {
      res.json('Registered Successfully');
    })
    .catch((err) => {
      console.error(err);
    });
});




router.route('/signin').post((req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Login error' });
      }
      return res.status(200).json({ success: true, message: 'Signin successful' });
    });
  })(req, res, next);
});

module.exports = router;
