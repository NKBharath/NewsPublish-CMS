const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role:     { type: String, enum: ['Admin', 'Editor', 'Author'], default: 'Author' },
}, { timestamps: true });

const UsersModel = mongoose.model('users', usersSchema);
module.exports = UsersModel;
