function getDataUser(e) {

    var user = document.getElementById('user')
    var pass = document.getElementById('password')
    var enviar = document.getElementById('enviar')

    try {

        e.preventDefault()

        var response = enviar.addEventListener('click', createUser(e, user.value, pass.value));

        console.log(response)

    } catch (error) {
        console.log(error)

    }
}

async function createUser(e, user, pass) {


    e.preventDefault()

    try {

        const formData = new FormData()
        formData.append('usersName', user)
        formData.append('password', pass)

        let options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: `{usersName: "${user}",password: "${pass}"}`
            // body: '{"usersName":"usersNew1","password":"1234"}'
        };

        // var response = await fetch('https://controle-agenda.herokuapp.com/controleagenda/users', options)
        var response = fetch('http://localhost:8080/controleagenda/users', options)
        alert("Espera o BANG")
        var responseConvertido = await response.json()
        console.log(responseConvertido)
        console.log(responseConvertido.usersName)
    } catch (error) {
        console.log(error)
    }


}




