import WebSocket, { WebSocketServer } from "ws";
import { Buffer } from "buffer";


export const initSocket = (SOCKET_PORT) => {
    const wss = new WebSocketServer({ port: SOCKET_PORT });
    console.log(`WebSocketServer start on ${SOCKET_PORT} port`)

    wss.on('connection', client => {
        console.log("User connected");
        client.on('message', data => {
            const clientPayload = Buffer.from(data).toString();
            wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(clientPayload);
                    console.log(clientPayload);
                }
            })
        });
    })

    return wss
}

