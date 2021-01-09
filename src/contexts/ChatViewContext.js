import React, { useContext, useState, useEffect } from "react";

const ChatViewContext = React.createContext();

export function useChatView() {
  return useContext(ChatViewContext);
}

export function ChatViewProvider({ children }) {
  const [currentChatView, setCurrentChatView] = useState(0);

  function changeChatView(viewIndex) {
    console.log(viewIndex);
    setCurrentChatView(viewIndex);
  }

  useEffect(() => {
    setCurrentChatView(0);
    return;
  }, []);

  return (
    <ChatViewContext.Provider value={{ currentChatView, changeChatView }}>
      {children}
    </ChatViewContext.Provider>
  );
}
