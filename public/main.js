const port = 3000;
let socket = io.connect('http://localhost:' + port);

socket.on('userName', (username) => {
    let text = 'You\'r username is => ' + username;
    console.log(text);
    $('textarea').val($('textarea').val() + text + '\n');
});

socket.on('newUser', (username) => {
    let text = username + " connected!";
    console.log(text);
    $('textarea').val($('textarea').val() + text + '\n');
});
socket.on('messageToClients', (msg, name) => {
    console.log(name + ' | => ' + msg);
    $('textarea').val($('textarea').val() + name + ' : ' + msg +'\n');
})

$(document).on('click', 'button', () => { 
    let message = $('input').val(); 
    socket.emit('message', message);
    $('input').val(null);
});
