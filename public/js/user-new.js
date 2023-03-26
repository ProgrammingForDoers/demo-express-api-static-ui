
var firstNameInput = document.querySelector("#first-name")
var lastNameInput = document.querySelector("#last-name")
var ageInput = document.querySelector("#age")
var weightInput = document.querySelector("#weight")

async function sendCreateUserRequest() {
  var newUser = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    age: ageInput.value,
    weight: weightInput.value
  }

  var response = await fetch("/users",
    {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    }
  )

  var user = await response.json()
  console.log(user)
}
