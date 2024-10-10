const port = 3000;
let socket = io.connect('http://localhost:' + port);

socket.on('userName', (username) => {
    let text = 'Имя пользователя: ' + username;
    console.log(text);
    let new_message = $('<h3>', {text: text});
    $('#ChatArea').append(new_message);
});

socket.on('newUser', (username) => {
    let text = username + " connected!";
    let img = '<img src="user-icon.svg" class="icon-user">'
    console.log(text);
    let new_message = $('<div class="ChatMessage">'+img+text+'</div>');
    $('#ChatArea').append(new_message);
});
socket.on('messageToClients', (msg, name) => {
    let img = '<img src="user-icon.svg" class="icon-user">'
    console.log(name + ' | => ' + msg);
    let new_message = $('<div class="ChatMessage">'+img+name+' : '+msg+"</div>");
    $('#ChatArea').append(new_message);
})

$(document).on('click', 'button', () => { 
    let message = $('input').val(); 
    socket.emit('message', message);
    $('input').val(null);
});
