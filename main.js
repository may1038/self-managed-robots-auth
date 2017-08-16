const express = require("express")
const data = require("./data")
const mustacheExpress = require("mustache-express")

const app = express()

app.engine("mustache", mustacheExpress())
app.set("views", "./views")
app.set("view engine", "mustache")
app.use(express.static("public"))

app.get("/users/:id", function(req, res) {
  const robot = parseInt(req.params.id)
  let profile = false;
  for (let i = 0; i < data.users.length; i++) {
    if (data.users[i].id === robot) {
      profile = data.users[i]
    }
  }
const dataInfo = data.users
  res.render("robot", {
    profile: profile,
    data: dataInfo
  })
})

app.get("/ohhai", function(req, res) {
  const users = data.users
  res.render("index", {
    users: users
  })
})



app.listen(3000, function() {
  console.log("Express started on port 3000")
})
