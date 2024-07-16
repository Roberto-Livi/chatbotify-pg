// src/components/ReactChatbotify.tsx
import React, { useEffect, useState } from 'react';
import Chatbot from 'react-chatbotify';
import { MessagesContext, Message } from 'react-chatbotify';
import './ChatbotifyStyles.css';  // Ensure this file is within src directory
import options from './chatbotConfig';
import CustomComponent from './CustomComponent';


const ReactChatbotify: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const flow = {
    start: {
      render: (params: any) => (
        <CustomComponent message={`
          <p>Please pick 3 of your favorite fruits from the list below:</p>
          <ol>
            <li>Apple</li>
            <li>Banana</li>
            <li>Cherry</li>
            <li>Date</li>
            <li>Elderberry</li>
          </ol>
        `} />
      ),
      path: (params: any) => params.userInput.toLowerCase() || 'end'
    },
    apple: {
      render: (params: any) => <CustomComponent message="Do you like apples?" />,
      path: "end"
    },
    banana: {
      message: "Do you like bananas?",
      path: "end"
    },
    end: {
      message: (params: any) => `I see you like ${params.prevPath}!`,
      chatDisabled: true
    }
  };

  const addTabIndexToMessages = () => {
    const userMessages = document.querySelectorAll('.rcb-user-message-entry');
    const botMessages = document.querySelectorAll('.rcb-bot-message-entry');
    userMessages.forEach(message => {
      message.setAttribute('tabindex', '0');
    });
    botMessages.forEach(message => {
      message.setAttribute('tabindex', '0');
    });
  };

  useEffect(() => {
    const observer = new MutationObserver(addTabIndexToMessages);
    const chatBody = document.querySelector('.rcb-chat-body-container');
    
    if (chatBody) {
      observer.observe(chatBody, { childList: true, subtree: true });
    }

    addTabIndexToMessages();

    return () => observer.disconnect();
  }, []);

  return (
    <div className="chatbotify-container">
      <MessagesContext.Provider value={{ messages, setMessages }}>
        <Chatbot options={options} flow={flow} />
      </MessagesContext.Provider>
      <button onClick={() => window.history.back()}>Back</button>
    </div>
  );
};

export default ReactChatbotify;
