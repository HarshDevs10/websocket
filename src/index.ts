import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({port: 8000})

wss.on('connection', (socket) => {
    // let i = 0
    // console.log("connected")
    // setInterval(() => {socket.send(i++)}, 1000)

    socket.on('message', (e) => {
        if(e.toString() === "ping"){
            socket.send("pong")
        }
    })
})