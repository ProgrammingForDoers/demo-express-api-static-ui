var express = require("express")
var app = express()

app.use(express.static("public"))

app.use(express.json())

idCounter = 0

users = []

app.get("/users", async function(request, response) {
  // Respond with the users array
  response.json(users)
})

app.get("/users/:id", async function(request, response) {
  // NOTE: `params` accesses values from the URL path  (:id)
  var id = request.params.id

  var userIndex = findUserIndexById(id)

  // Respond with the specified user
  response.json(users[userIndex])
})

app.post("/users", async function(request, response) {
  // NOTE: `body` accesses values from the JSON request body
  var providedFirstName = request.body["firstName"]
  var providedLastName = request.body["lastName"]
  var providedAge = request.body["age"]
  var providedWeight = request.body["weight"]

  var nextId = idCounter
  idCounter = idCounter + 1

  var newUser = {
    id: nextId,
    firstName: providedFirstName,
    lastName: providedLastName,
    age: providedAge,
    weight: providedWeight,
  }
  console.log(newUser)

  users.push(newUser)

  // Respond with the new user
  response.json(newUser)
})

app.put("/users/:id", async function(request, response) {
  // NOTE: `params` accesses values from the URL path (:id)
  var id = request.params.id

  var userIndex = findUserIndexById(id)

  var providedFirstName = request.body["firstName"]
  var providedLastName = request.body["lastName"]
  var providedAge = request.body["age"]
  var providedWeight = request.body["weight"]

  var user = users[userIndex]
  user["firstName"] = providedFirstName
  user["lastName"] = providedLastName
  user["age"] = providedAge
  user["weight"] = providedWeight

  console.log(user)

  // Respond with the new user
  response.json(user)
})

app.delete("/users/:id", async function(request, response) {
  // NOTE: `params` accesses values from the URL path
  var id = request.params.id

  var userIndex = findUserIndexById(id);

  users.splice(userIndex, 1);

  // Respond with a message
  response.json({ msg: 'Deleted user' })
})

app.listen(3000, function() {
  console.log("App listening on port 3000")
})

function findUserIndexById(id) {
  for (var i = 0; i < users.length; i++) {
    var user = users[i]
    if (user["id"] == id) {
      return i;
    }
  }
}

module.exports = app
