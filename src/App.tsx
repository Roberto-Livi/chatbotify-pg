// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ReactChatbotify from './ReactChatbotify';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/react-chatbotify" element={<ReactChatbotify />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
