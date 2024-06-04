const router = require('express').Router();
const passport = require('passport');
const User = require('../Models/User');
const { userValidator, validate, validatePassword, signInValidator } = require('../middlewares/validator');
const { create, signIn,updateUser, viewUsers,deleterUser, previewUser } = require('../Controllers/User');
// Add user create route
router.post("/create", validate,create, (req, res) => {
  console.log("Received a request to create a user:", req.body);
  create(req, res);
});
router.get('/view-users', viewUsers);
router.get("/preview-user/:id", previewUser)
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleterUser)

router.post('/signIn', signInValidator, validate, signIn);

module.exports = router;
