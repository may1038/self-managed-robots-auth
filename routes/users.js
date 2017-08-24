const express = require("express")
const router = express.Router()
const data = require("../data")
const MongoClient = require("mongodb")
const users = require("../models/robot")
const mongoose = require("mongoose")

const url = "mongodb://127.0.0.1:27017/robots"

router.get("/", function(req, res) {
  mongoose.connect(url, function(err, db) {
    users.find().then(function(users) {
      res.render("index", {
        users: users
      })
    })
  })
})

router.get("/register", function(req, res) {
  res.render("register")
})

router.get("/users/:id", function(req, res) {
  mongoose.connect(url, function(err, db) {
    users.findOne({ id: parseInt(req.params.id) }).then(function(user) {
      res.render("robot", {
        user: user
      })
    })
  })
})

router.post("/newRobot", function(req, res) {
  res.redirect("/")
})

module.exports = router
