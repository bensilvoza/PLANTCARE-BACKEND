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

// ========================
// /administrator/delete/id
// ========================
router.get("/administrator/delete/:id", async function (req, res) {
  await Register.findByIdAndDelete(req.params.id);
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
