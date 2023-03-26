
var editLink = document.querySelector("#edit-link")

var idColumn = document.querySelector("#id")
var firstNameColumn = document.querySelector("#first-name")
var lastNameColumn = document.querySelector("#last-name")
var ageColumn = document.querySelector("#age")
var weightColumn = document.querySelector("#weight")

var userId = getUserIdFromUrlQueryParam()

function updateEditLink() {
  editLink.href = `./user/edit.html?id=${userId}`
}

async function updateTable() {
  var apiUrl = `/users/${userId}`
  console.log(apiUrl)

  var response = await fetch(apiUrl, { method: "GET" })
  var user = await response.json()
  console.log(user)

  idColumn.innerHTML = user["id"]
  firstNameColumn.innerHTML = user["firstName"]
  lastNameColumn.innerHTML = user["lastName"]
  age.innerHTML = user["age"]
  weight.innerHTML = user["weight"]
}

async function sendDeleteUserRequest() {
  var response = await fetch(`/users/${userId}`, { method: "DELETE" })
  var message = await response.json()
  console.log(message)
}

updateEditLink()
updateTable()
