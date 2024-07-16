// src/chatbot/ActionProvider.ts
import React, { useContext } from 'react';
import { MessagesContext, Message } from 'react-chatbotify';

const ActionProvider = () => {
  const { setMessages } = useContext(MessagesContext);

  const handleHello = () => {
    const message: Message = {
      type: 'text',
      content: 'Hello! How can I assist you today?',
      sender: 'bot',
    };
    setMessages((prevMessages: Message[]) => [...prevMessages, message]);
  };

  const handleUnknown = () => {
    const message: Message = {
      type: 'text',
      content: "Sorry, I do not understand your message.",
      sender: 'bot',
    };
    setMessages((prevMessages: Message[]) => [...prevMessages, message]);
  };

  return { handleHello, handleUnknown };
};

export default ActionProvider;
