const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  Username: { type: String, unique: true },
  Name: { type: String },
  Email: { type: String, unique: true },
  Password: { type: String },
  role: {
    type: String,
    default: 'Travaler',
    enum: ['admin', 'Travaler'],
  },
});

userSchema.plugin(passportLocalMongoose);

// Remove the pre-save hook for hashing the password
// userSchema.pre('save', async function(next) {
//   if (this.isModified('Password')) {
//     console.log('Before save:', this);

//     this.Password = await bcrypt.hash(this.Password, 8);

//     console.log('After hashing password:', this);
//   }
//   next();
// });

userSchema.methods.comparePassword = function(password) {
  console.log('Comparing passwords:', password, this.Password);
  return password === this.Password; // Plain text comparison
};

module.exports = mongoose.model('User', userSchema);
