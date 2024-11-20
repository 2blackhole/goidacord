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
                const data = {
                    login: loginForm.value,
                    password: passwordForm.value
                }
                fetch("http://localhost:3000/login", {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(data)
                }).then((res => res.json()))
                    .then(res => console.log(res))
                /*
                socket.emit('login_try', {
                    login: loginForm.value,
                    password: passwordForm.value
                })
                 */
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
            } else {
                if (registerNickname.value && registerEmail.value && registerPassword.value.length >= 8 && registerPassword.value === confirmPassword.value) {

                    const data = {
                        login: registerNickname.value,
                        password: registerPassword.value,
                        email: registerEmail.value
                    }

                    fetch("http://localhost:3000/register", {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(data)
                    }).then((res => res.json()))
                        .then(res => console.log(res))

                    /*
                    socket.emit('register', {
                        login: registerNickname.value,
                        password: registerPassword.value,
                        email: registerEmail.value
                    })
                    */

                } else {
                    alert("Invalid register credentials. Your Login must be not null and Password length must be at least 8")
                }
                event.preventDefault()
            }
        }
    )
}
else {
    console.log("There is no " + loginButton)
}

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