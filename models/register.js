var mongoose = require("mongoose");

// Register
var registerSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  role: String,
  password: String,
});
var Register = mongoose.model("Register", registerSchema);

module.exports = Register;
