const port = 3000
const socket = io.connect('http://localhost:' + port)

const loginForm = document.getElementById("Username_auth")
const passwordForm = document.getElementById("Password_auth")

const registerNickname = document.getElementById("registerNickname")
const registerEmail = document.getElementById("registerEmail")
const registerPassword = document.getElementById("registerPassword")
const confirmPassword = document.getElementById("confirmPassword")

const loginButton = document.getElementById("login_button")
const registerButton = document.getElementById("register_button")

if (loginButton) {
    loginButton.addEventListener(
        'click', (event) => {
            if (loginForm.value && passwordForm.value.length >= 8) {
                socket.emit('login_try', {
                    login: loginForm.value,
                    password: passwordForm.value
                })
            } else {
                alert("Invalid login credentials. Your Login must be not null and Password length must be at least 8")
            }
            event.preventDefault()
        }
    )
}
else {
    console.log("There is no " + loginButton)
}

if (registerButton) {
    registerButton.addEventListener(
        'click', (event) => {
            if (registerPassword.value !== confirmPassword.value) {
                alert(`Passwords do not match!`)
            }
            if (registerNickname.value && registerEmail.value && registerPassword.value.length >= 8 && registerPassword.value === confirmPassword.value) {
                socket.emit('register', {
                    login: registerNickname.value,
                    password: registerPassword.value,
                    email: registerEmail.value
                })
            } else {
                alert("Invalid register credentials. Your Login must be not null and Password length must be at least 8")
            }
            event.preventDefault()
        }
    )
}
else {
    console.log("There is no " + loginButton)
}

socket.on('userName', name => {
    console.log(`Connection - ${name}`)
})

socket.on('regFail', () => {
    alert('Registration failed: account already exists!')
})

socket.on('regSuccess', () => {
    alert('Registration succeeded!')
})

socket.on('logFail', () => {
    alert('Something went wrong!')
})

socket.on('logSuccess', () => {
    alert('Login successful!')
})

socket.on('logIncorrect', () => {
    alert('Invalid credentials!')
})

function switchToRegister() {
    document.getElementById('login__container').style.display = 'none';
    document.getElementById('registration__container').style.display =
        'flex';
}

function switchToLogin() {
    document.getElementById('login__container').style.display = 'flex';
    document.getElementById('registration__container').style.display =
        'none';
}