// src/chatbot/MessageParser.ts
import ActionProvider from './ActionProvider';

class MessageParser {
  private actionProvider: any;

  constructor() {
    this.actionProvider = ActionProvider();
    console.log("MessageParser instantiated");
  }

  parse(message: string) {
    console.log("parse called with message:", message);
    if (message.includes('hello')) {
      this.actionProvider.handleHello();
    } else {
      this.actionProvider.handleUnknown();
    }
  }
}

export default MessageParser;
