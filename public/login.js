const port = 3000
const socket = io.connect('http://localhost:' + port)

const loginForm = document.getElementById('Username_auth')
const passwordForm = document.getElementById('Password_auth')

const loginButton = document.getElementById('login_button')
const registerButton = document.getElementById('register_button')

socket.on('userName', name => {
    console.log(`Connection - ${name}`)
})
