// Comando para establecer la conexión

var socket = io();
var label = $('#lblNuevoTicket');

//on: para escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdida conexión');
});

socket.on('estadoActual', function(estadoActual) {
    label.text(estadoActual.actual);
});

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});