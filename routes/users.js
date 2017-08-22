const express = require("express")
const router = express.Router()
const data = require("../data")
const MongoClient = require("mongodb")

// router.get("/users/:id", function(req, res) {
//   const robot = parseInt(req.params.id)
//   let profile = false;
//   for (let i = 0; i < data.users.length; i++) {
//     if (data.users[i].id === robot) {
//       profile = data.users[i]
//     }
//   }
//   const dataInfo = data.users
//     res.render("robot", {
//       profile: profile,
//       data: dataInfo
//     })
//   })

// router.get("/", function(req, res) {
//   const users = data.users
//   res.render("index", {
//     users: users
//   })
//

const url = "mongodb://127.0.0.1:27017/robots"

router.get("/", function(req, res) {
  MongoClient.connect(url, function(err, db) {
    db.collection("users").find().toArray().then(function(users) {
      res.render("index", {
        users: users
      })
    })
  })
})

router.get("/users/:id", function(req, res) {
  MongoClient.connect(url, function(err, db) {
    db.collection("users").findOne({id: parseInt((req.params.id))}).then(function(user) {
      res.render("robot", {
        user: user
      })
    })
  })
})

module.exports = router
