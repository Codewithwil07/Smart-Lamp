const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const { Server } = require('socket.io');
const http = require('http');
const cors = require('cors');

const express = require('express');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());
app.use(cors({ origin: true, credentails: true }));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Smart-Lamp/src/main.jsx');
});

io.on('connection', (socket) => {
    console.log('connected...');
    socket.on('disconnected', () => {
        console.log('disconnected...');
    });
});

app.listen(3000, () => {
    console.log('listening on port 3000 ...');
});

const port = new SerialPort({
    path: 'COM4',
    baudRate: 9600,
});

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

// parser.on('data', (result) => {
//     console.log('data dari arduino =>', +result);
//     io.emit('data', { data: result });
// });

// app.post('/arduinoApi', (req, res) => {
//     const data = req.body.data;
//     port.write(data, (err) => {
//         if (err) {
//             console.log('err:', err);
//             res.status(500).json({ error: 'write data error' });
//         }
//         console.log('data terkirim =>', data);
//         res.end();
//     });
// });

parser.on('data', (result) => {
    console.log('data dari arduino =>', +result);
    io.emit('data', { data: result });
});
app.post('/arduinoApi', (req, res) => {
    const { startHour, startMinute, endHour, endMinute } = req.body.data;
    const command = `${startHour}, ${startMinute}, ${endHour}, ${endMinute} \n`;
    port.write(command, (err) => {
        if (err) {
            console.log('err:', err);
            res.status(500).json({ error: 'write data error' });
        }
        console.log('data terkirim =>', command);
        res.end();
    });
});
