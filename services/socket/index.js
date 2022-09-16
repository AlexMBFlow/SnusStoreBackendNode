import { WebSocketServer } from "ws";
import { Buffer } from "buffer";


export const initSocket = (SOCKET_PORT) => {
    const wss = new WebSocketServer({ port: SOCKET_PORT });
    wss.on('connection', ws => {
        console.log("USER CONNECTED!!!")
        ws.on('message', data => {
            console.log("data", Buffer.from(data).toString())
        });
        ws.send('send!');
    })

    return wss
}

