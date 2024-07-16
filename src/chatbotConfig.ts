// src/chatbotConfig.ts

const options = {
  isOpen: true,
  botBubble: {
    animate: true,
    showAvatar: true,
    avatar: "/images/image_06.png"
  },
  userBubble: {
    animate: true,
    showAvatar: false,
  },
  chatButton: {
    backgroundColor: '#5ccc9d',
    icon: 'path_to_icon_image',
  },
  chatWindow: {
    showScrollbar: true,
  },
  chatHistory: {
    storageKey: "chat_history",
  },
  header: {
    title: "ChatbotifyBot",
    showAvatar: true,
    avatar: 'path_to_avatar_image',
  },
  footer: {
    text: "Powered by React Chatbotify",
  },
  advance: {
    useCustomMessages: true,
  }
};

export default options;
