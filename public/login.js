const port = 3000
const socket = io.connect('http://localhost:' + port)

const loginForm = document.getElementById("Username_auth")
const passwordForm = document.getElementById("Password_auth")

const loginButton = document.getElementById("login_button")
const registerButton = document.getElementById("register_button")

socket.on('userName', name => {
    console.log(`Connection - ${name}`)
})

socket.on('regFail', () => {
    alert('Registration failed: account already exists!')
})

socket.on('regSucc', () => {
    alert('Registration succeeded!')
})

if (loginButton) {
    loginButton.addEventListener(
        'click', () => {
            if (loginForm.value && passwordForm.value.length >= 8) {
                socket.emit('login_try', {
                    login: loginForm.value,
                    password: passwordForm.value
                })
            } else {
                alert("Invalid login credentials. Your Login must be not null and Password length must be at least 8")
            }
        }
    )
}
else {
    console.log("There is no " + loginButton)
}

if (registerButton) {
    registerButton.addEventListener(
        'click', () => {
            if (loginForm.value && passwordForm.value.length >= 8) {
                socket.emit('register', {
                    login: loginForm.value,
                    password: passwordForm.value
                })
            } else {
                alert("Invalid register credentials. Your Login must be not null and Password length must be at least 8")
            }
        }
    )
}
else {
    console.log("There is no " + loginButton)
}