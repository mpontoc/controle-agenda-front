window.onload = function() {
  var enviar = document.getElementById("enviar");
  enviar.addEventListener("click", function() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("password").value;
    createUser(user, pass);
  });
};

async function createUser(user, pass) {
  try {
    let options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };
  
    var response = await fetch(
      "http://localhost:8080/agendapessoal/users/2",
      options
    );
  
    var data = await response.json();
    console.log(JSON.stringify(data));
    console.log(data.usersName);
  
    alert("Espera o BANG");

    alert("Data " + JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
}
