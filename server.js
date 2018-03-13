require("babel-register");
const express = require("express");
const cors = require("cors");
const http = require('http');
var app = express();
var server = http.createServer(app);

var io = require('socket.io').listen(server);

app.use(cors())

app.get('/', (req, res) => {
  res.redirect('/index.html');
});

app.use(express.static(__dirname + '/static'));

server.listen(3113, () => {
  console.log('Сервер работает на: ', 3113);
});

io.sockets.on('connection', (client) => {
  console.log("Юзер подключен");

  client.on('do_calculations', (numbers) => {
    let max = -1;

    // Вычисления
    numbers
      .split(" ")
      .map(number => Number(number))
      .forEach((number) => {
        if (number > max) {
          max = number;
        }
      });

    console.log("Введенные числа: ", numbers);
    console.log("Максимальное число: ", max);
    client.emit("calculations_done", max);
  })

  client.on('disconnect', () => {
    console.log("Юзер отключился");
  });
});

