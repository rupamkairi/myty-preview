import React, { useContext, useState, useEffect } from "react";

const ChatDataContext = React.createContext();

export function useChatData() {
  return useContext(ChatDataContext);
}

export function ChatDataProvider({ children }) {
  const [currentChatData, setCurrentChatData] = useState(null);

  function changeChatData(chatData) {
    console.log(chatData);
    setCurrentChatData(chatData);
  }

  useEffect(() => {
    setCurrentChatData(0);
    return;
  }, []);

  return (
    <ChatDataContext.Provider value={{ currentChatData, changeChatData }}>
      {children}
    </ChatDataContext.Provider>
  );
}
