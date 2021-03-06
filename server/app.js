import express from 'express';
import webpack from 'webpack';
import mongoose from 'mongoose';
import path from 'path';
import config from '../webpack.config.js';
import open from 'open';
import SocketIo from 'socket.io';
import './bootstrap';
import { registerSocket } from './api/chat/chat.service'
var bodyParser = require('body-parser');


const port = 9000;
const app = express();
const compiler = webpack(config);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('../server/routes')(app);

mongoose.connect('mongodb://localhost/ChatApp');
mongoose.connection.on('error', function (err) {
        console.error('MongoDB connection error: ' + err);
        process.exit(-1);
    }
);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

const server = app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});

const io = new SocketIo(server);
registerSocket(io);

io.on('connection', function(socket) {

    socket.on('typing', function (data) {
        io.sockets.emit('typing', data.user);
    });
    socket.on('stop:typing', function (data) {
        io.sockets.emit('stop:typing', data.user);
    });
    socket.on('new:user', function(data){
        //todo show user add message
    });
});
