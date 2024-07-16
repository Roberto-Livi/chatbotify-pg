// src/Home.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Chatbot Comparison</h1>
      <ul>
        <li>
          <Link to="/react-chatbotify">React Chatbotify</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
