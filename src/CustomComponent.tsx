// src/components/CustomComponent.tsx
import React from 'react';
import styled from 'styled-components';
import parse from "html-react-parser";

interface CustomComponentProps {
  message: string;
}

const BotMessageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 10px 0;
`;

const BotAvatar = styled.div`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  background-image: url('/images/image_06.png'); // Replace with your avatar image or base64 string
  background-size: cover;
  margin-right: 10px;
  border-radius: 50%;
`;

const BotMessageEntry = styled.div`
  padding: 10px;
  max-width: 75%;
`;

const CustomComponent: React.FC<CustomComponentProps> = ({ message }) => {
  return (
    <BotMessageContainer>
      <BotAvatar />
      <BotMessageEntry>
        {parse(message)}
      </BotMessageEntry>
    </BotMessageContainer>
  );
};

export default CustomComponent;
