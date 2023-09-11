import { Injectable, OnModuleInit } from "@nestjs/common";
import { Socket, io } from "socket.io-client";


@Injectable()
export class SocketClient implements OnModuleInit {
    public socketClient: Socket;

    constructor() {
        this.socketClient = io('http://localhost:6001')
    }

    onModuleInit() {
        this.registerConsumerEvent()
    }

    public registerConsumerEvent() {
        // this.socketClient.emit('newMessage', {
        //     msg: 'Hello how are you'
        // })
        this.socketClient.on('connect', () => {
            console.log('Connected to Gateway')
        })
        this.socketClient.on('onMessage', (payload: any) => {
            console.log(payload)
        })
    }

}