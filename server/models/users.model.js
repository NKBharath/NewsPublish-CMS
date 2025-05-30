const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true, 
    unique: true },
  email:    { 
    type: String, 
    required: true, 
    unique: true },
  password: { 
    type: String, 
    required: true },
  role: {
    type: String,
    default: 'user',
  }
}, 

{ timestamps: true });

const UsersModel = mongoose.model('users', userSchema);
module.exports = UsersModel;
