var express = require("express");
var router = express.Router();
var Register = require("../models/register");

// =====
// login
// =====
router.get("/login", async function (req, res) {
  var getUsers = await Register.find({});
  res.json(getUsers);
});

// ========
// REGISTER
// ========
router.get("/register", async function (req, res) {
  var data = await Register.find({});
  res.json(data);
});

router.post("/register", async function (req, res) {
  var data = new Register({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  await data.save();
  res.json("User registered");
});

// ===============
// register/update
// ===============
router.get("/register/update", async function (req, res) {
  res.json("");
});

router.post("/register/update", async function (req, res) {
  var data = await Register.findOne({ email: req.body.email });
  data["password"] = req.body.password;
  await Register.findOneAndUpdate({ email: req.body.email }, data);

  res.json("user updated");
});

// exports
module.exports = router;
