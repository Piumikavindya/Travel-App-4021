const { check, validationResult } = require("express-validator");

// pass some validations to name, email and passwords

exports.userValidator = [
    check("name").trim().not().isEmpty().withMessage("Name is missing!").isLength({ min: 3, max: 20 }).withMessage("Name must be 3 to 20 characters long!"),
    // check("Email").normalizeEmail().isEmail().withMessage("Email is invalid!"),
    // check("password").trim().not().isEmpty().withMessage("Password is missing!").isLength({ min: 4, max: 12 }).withMessage("Password must be 8 to 20 characters long!"),
];

exports.validatePassword =[
    // check("newPassword").trim().not().isEmpty().withMessage("Password is missing!").isLength({ min: 3, max: 12 }).withMessage("Password must be 8 to 20 characters long!"),
];

exports.signInValidator =[
    // check("email").normalizeEmail().isEmail().withMessage("Email is invalid!"),
    // check("password").trim().not().isEmpty().withMessage("Password is missing!").isLength({ min: 4, max: 12 }).withMessage("Password must be 8 to 20 characters long!"),
];

exports.validate =(req,res,next) =>{
    const error = validationResult(req).array();
    // return the error massege
    if(error.length){
       return res.json({error: error[0].msg});
    }

    next();
}