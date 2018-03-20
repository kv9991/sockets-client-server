var socket;

const button = document.getElementById("send");
const input = document.getElementById("myinput");
const result = document.getElementById("result");

socket = io.connect('http://localhost:3113', { reconnect: true });
socket.on('calculations_done', (data) => {
  if (typeof data === "number") {
    result.innerHTML = data;
  } else {
    result.innerHTML = "Неверное значение";
  }
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  const message = input.value;
  postMessage(message);
})

const postMessage = msg => {
  if (socket) {
    socket.emit('do_calculations', msg);
  }
}