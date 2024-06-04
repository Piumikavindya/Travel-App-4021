const User = require('../Models/User');
const {generateMailTransporter} = require('../Utils/mail');
const PasswordResetToken = require("../Models/PasswordResetToken");
const { generateRandomByte, sendError } = require('../Utils/helper');
const user = require('../Models/User');


exports.create = async (req, res) => {
    const { Name, Email, Password, role, Username} = req.body;
  const newUser = new User({
    Username,
    Name,
    Email,
    Password,
    role,
  });

    try {
        console.log('New User:', newUser);

        // Save the new user to the database
        await newUser.save();

        res.json({ user: newUser });
    
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// get the all the users
exports.viewUsers = async (req,res) =>{
    User.find().then((Users)=>{
     res.json(Users)
    }).catch((err)=>{
     console.log(err);
    })
 
 };


 // view details of perticular user
exports.previewUser = async (req,res) =>{
    const id = req.params.id;

    try {
        const user = await User.findById(id);
        if (!user) {
            
            return res.status(404).json({ status: "user not found" });
        }
        

        res.status(200).json(user); 
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ status: "Error with getting user", error: err.message });
    }
 
 };



 
//update user details
exports.updateUser = async (req,res)=>{
    let id = req.params.id;

    const { Name, Email, Password, role, Username} = req.body;
  const updateUser = new User({
    Username,
    Name,
    Email,
    Password,
    role,
  });

    try {
        const updatedUser = await user.findByIdAndUpdate(id, updateUser, { new: true });
        res.status(200).json({ status: "User updated", user: updatedUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: "Error with updating User", error: err.message });
    }
};



exports.deleterUser = async (req,res)=>{
    let id = req.params.id;
    try {
    await user.findByIdAndDelete(id);
        res.status(200).send({status:"User deleted"});
    } catch (err) {
            res.status(500).send({status: "Error with delete user", error: err.message });
        }
    };





    
//user signin


exports.signIn = async (req, res) => {
    const { Email, Password, role } = req.body;
  
    try {
      console.log('Incoming data:', req.body); // Log incoming data
  
      // Find the user by email
      const user = await User.findOne({ Email });
      console.log('User found:', user); // Log the user found
  
      if (!user) {
        console.log('User not found with the provided email');
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
      }
  
      // Verify the password
      const isPasswordMatch = user.comparePassword(Password);
      console.log('Password match:', isPasswordMatch); // Log password match result
  
      if (!isPasswordMatch) {
        console.log('Password does not match');
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
      }
  
      // Check the role
      if (role && role !== user.role) {
        console.log('Role does not match');
        return res.status(401).json({ success: false, message: 'Invalid role' });
      }
  
      // If email, password, and role are correct, return user data
      const { _id, Name, role: userRole } = user;
      res.json({ success: true, user: { id: _id, Name, role: userRole } });
    } catch (error) {
      console.error('Error in signIn:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  };
  