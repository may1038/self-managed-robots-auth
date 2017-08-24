//require the stuff
const mongoose = require("mongoose")
//do the stuff

//define the schema
const newRobotSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  avatar: String,
  skills: String,
  university: String,
  jobs: String,
  company: String,
  phonenumber: String,
  email: String
})
//create a model using that schema
const users = mongoose.model("users", newRobotSchema)

//export
module.exports = users
