const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json());

app.post('/update', (req, res) => {
  const { alert, sensorValue } = req.body;
  console.log(`Alert: ${alert}, Sensor Value: ${sensorValue}`);
  io.emit('sensorData', { alert, sensorValue });
  res.sendStatus(200);
});

server.listen(4000, () => {
  console.log('Server running on port 4000');
});
