var express = require("express");
var router = express.Router();
var Register = require("../models/register");

// ==============
// /administrator
// ==============
router.get("/administrator", async function (req, res) {
  var getUsers = await Register.find({});
  res.json(getUsers);
});

// =====================
// /administrator/create
// =====================
router.post("/administrator/create", async function (req, res) {
  var data = new Register(req.body);
  await data.save();
  res.json("Account registered");
});

// exports
module.exports = router;
