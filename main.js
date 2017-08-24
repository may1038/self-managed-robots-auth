const express = require("express")
const data = require("./data")
const mustacheExpress = require("mustache-express")
const session = require("express-session")
const usersInfo = require("./routes/users")
const MongoClient = require("mongodb")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const app = express()
mongoose.Promise = require("bluebird")
app.engine("mustache", mustacheExpress())
app.set("views", "./views")
app.set("view engine", "mustache")
app.use(express.static("public"))

let sess = {
  secret: "TYLERSSECRETKEY",
  cookie: {},
  saveUninitialized: true,
  resave: true
}

app.use(session(sess))

const url = "mongodb://127.0.0.1:27017/robots"
mongoose.connect(url)

const newRobot = require("./models/robot")

app.use(usersInfo)

app.listen(3000, function() {
  console.log("Express started on port 3000")
})
