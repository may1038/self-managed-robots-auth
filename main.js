const express = require("express")
const data = require("./data")
const mustacheExpress = require("mustache-express")
const MongoClient = require("mongodb")
const app = express()

app.engine("mustache", mustacheExpress())
app.set("views", "./views")
app.set("view engine", "mustache")
app.use(express.static("public"))

const usersInfo = require("./routes/users")
app.use(usersInfo)

//this pushes information to the database

// MongoClient.connect(url, function(err, db) {
//   if (err) {
//     throw err;
//   } else {
//     console.log('Successfully connected to the database');
//   }
//   for (var i = 0; i < data.users.length; i++) {
//     const user = data.users[i];
//     db.collection("users").updateOne(
//       {id: user.id},
//       user,
//       {upsert: true}
//     )
//   }
// })


app.listen(3000, function() {
  console.log("Express started on port 3000")
})
