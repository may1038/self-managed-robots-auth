const express = require("express")
const data = require("./data")
const mustacheExpress = require("mustache-express")

const app = express()

app.engine("mustache", mustacheExpress())
app.set("views", "./views")
app.set("view engine", "mustache")
app.use(express.static("public"))

app.get("/ohhai", function(request, response) {
  const users = data.users
  response.render("index", {
    users: users
  })
})



app.listen(3000, function() {
  console.log("Express started on port 3000")
})
