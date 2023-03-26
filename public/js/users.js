
var tableBody = document.querySelector("#table-body")

async function updateTable() {
  var response = await fetch("/users", { method: "GET" })
  var users = await response.json()
  console.log(users)

  for (var i = 0; i < users.length; i++) {
    var user = users[i]

    tableBody.insertAdjacentHTML("beforeend", `
      <tr>
        <td>${user['id']}</td>
        <td>${user['firstName']}</td>
        <td>${user['lastName']}</td>
        <td>${user['age']}</td>
        <td>${user['weight']}</td>
        <td>
          <a href="./user.html?id=${user['id']}">Show</a>
        </td>
      </tr>
    `)
  }
}

updateTable()
