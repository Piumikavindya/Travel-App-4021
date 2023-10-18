const router = require("express").Router();
const User = require("../Models/User");

router.route("/add").post((req, res) => {

  const Name =req.body.Name;
  const Email =req.body.Email;
  const Password =req.body.Password;
  // Check if the required fields are present
  
  const newUser = new User({
    Name,
    Email,
    Password,
  });

  newUser.save().then(() => {
      res.json("Registered Successfully");
     
    })
    .catch((err) => {
      console.error(err);
     
    });
});

module.exports = router;
