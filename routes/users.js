const express = require("express")
const app = express()
const router = express.Router()
const mongoose = require("mongoose")
mongoose.Promise = require("bluebird")
const data = require("../data")
const users = require("../models/robot")
const bodyParser = require("body-parser")
const url = "mongodb://127.0.0.1:27017/robots"

mongoose.connect(url)

router.get("/", function(req, res) {
  users.find().then(function(users) {
    res.render("index", {
      users: users
    })
  })
})

//render the profile of each robot by id
router.get("/users/:id", function(req, res) {
  users.findOne({ _id: req.params.id }).then(function(user) {
    res.render("robot", {
      user: user
    })
  })
})

router.get("/register", function(req, res) {
  res.render("register")
})

//register new robot
router.post("/newRobot", function(req, res) {
  const name = req.body.name
  const userName = req.body.userName
  const password = req.body.password
  const avatar = req.body.avatar
  const email = req.body.email
  const phonenumber = req.body.phonenumber
  const university = req.body.university
  const company = req.body.company
  const jobs = req.body.jobs
  const skills = req.body.skills

  const user = new users()
  user.username = userName
  user.password = password
  user.name = name
  user.avatar = avatar
  user.skills = skills
  user.university = university
  user.jobs = jobs
  user.company = company
  user.phonenumber = phonenumber
  user.email = email
  user
    .save()
    .then(function(user) {
      res.redirect("/")
    })
    .catch(function(error) {
      res.render("register", {
        user: user,
        errors: error.errors
      })
    })
})

router.post("/edit", function(req, res) {
  const name = req.body.name
  const userName = req.body.userName
  const password = req.body.password
  const avatar = req.body.avatar
  const email = req.body.email
  const phonenumber = req.body.phonenumber
  const university = req.body.university
  const company = req.body.company
  const jobs = req.body.jobs
  const skills = req.body.skills

  user.username = userName
  user.password = password
  user.name = name
  user.avatar = avatar
  user.skills = skills
  user.university = university
  user.jobs = jobs
  user.company = company
  user.phonenumber = phonenumber
  user.email = email
  user
    .save()
    .then(function(user) {
      res.redirect("/")
    })
    .catch(function(error) {
      res.render("edit", {
        beer: beer,
        errors: error.errors
      })
    })
})

router.post("/newRobot", function(req, res) {
  res.redirect("/")
})

router.get("/main/:id/edit", function(req, res) {
  users.findOne({ _id: req.params.id }).then(function(user) {
    res.redirect("edit", {
      user: user
    })
  })
})
module.exports = router
