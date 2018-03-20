require("babel-register");
const express = require("express");
const cors = require("cors");
const http = require('http');
const calculation = require("./calculation");
const app = express();
const server = http.createServer(app);

const io = require('socket.io').listen(server);

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

  client.on('do_calculations', (numbersToCalculate) => {
    console.log("Введенные числа: ", numbersToCalculate);

    return calculation(numbersToCalculate)
      .then((result) => {
        console.log("Максимальное число: ", result);
        client.emit("calculations_done", result);
        Promise.resolve();
      })
      .catch((err) => {
        console.log("Ошибка на сервере: ", err);
      })
  })

  client.on('disconnect', () => {
    console.log("Юзер отключился");
  });
});

