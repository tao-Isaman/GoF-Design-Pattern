export interface WebSocketConnect {
    connect(): void;
    send(data: string): void;
}

export class WebSocketConnectImpl implements WebSocketConnect {
    private readonly url: string;
    private webSocketConnection: WebSocket | undefined;

    constructor(url: string) {
        this.url = url;
    }

    connect(): void {
        console.log('Connecting to WebSocket');
    }

    send(data: string): void {
        if (this.webSocketConnection) {
            this.webSocketConnection.send(data);
        } else {
            throw new Error('WebSocket is not connected');
        }
    }
}
