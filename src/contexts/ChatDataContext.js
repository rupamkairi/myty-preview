import React, { useContext, useState, useEffect } from "react";
//
import { threads } from "../data/chats/chats";

const ChatDataContext = React.createContext();

export function useChatData() {
  return useContext(ChatDataContext);
}

export function ChatDataProvider({ children }) {
  const [currentChatData, setCurrentChatData] = useState(0);
  const [currentChatThreads, setCurrentChatThreads] = useState(0);

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
    setCurrentChatThreads(0);
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
