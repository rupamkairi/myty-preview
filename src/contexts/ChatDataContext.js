import React, { useContext, useState, useEffect } from "react";
//
import { threads } from "../data/chats/chats";

const ChatDataContext = React.createContext();

export function useChatData() {
  return useContext(ChatDataContext);
}

export function ChatDataProvider({ children }) {
  const [currentChatData, setCurrentChatData] = useState(null);
  const [currentChatThreads, setCurrentChatThreads] = useState(null);

  function changeChatData(chatData) {
    // console.log(chatData);
    setCurrentChatData(chatData);
  }

  function changeChatThreads(chatId) {
    // console.log("set chat by the chatId: " + chatId);
    setCurrentChatThreads(threads[parseInt(chatId) - 1]);
  }

  useEffect(() => {
    setCurrentChatData(0);
    setCurrentChatThreads(null);
    return;
  }, []);

  return (
    <ChatDataContext.Provider
      value={{
        currentChatData,
        currentChatThreads,
        changeChatData,
        changeChatThreads,
      }}
    >
      {children}
    </ChatDataContext.Provider>
  );
}
