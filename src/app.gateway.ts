import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway()
export class AppGateway {
  @WebSocketServer()
  server;

  @SubscribeMessage('messageProduct')
  handleMessagePrLang(@MessageBody() message: string): void {
    this.server.emit('messageProduct', message);
  }
}
