// src/chatbot/withMessagesContext.tsx
import React from 'react';
import { MessagesContext } from 'react-chatbotify';

const withMessagesContext = (Component: any) => {
  return (props: any) => (
    <MessagesContext.Consumer>
      {({ messages, setMessages }) => (
        <Component {...props} messages={messages} setMessages={setMessages} />
      )}
    </MessagesContext.Consumer>
  );
};

export default withMessagesContext;
