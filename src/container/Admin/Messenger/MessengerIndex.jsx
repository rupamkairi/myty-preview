import React from "react";
//
import { useChatView } from "../../../contexts/ChatViewContext";
import { ChatDataProvider } from "../../../contexts/ChatDataContext";
//
//
import Peoples from "../../../components/Admin/Peoples/Peoples";
import Chat from "../../../components/Admin/Chat/Chat";

export default function MessengerIndex() {
  const { currentChatView } = useChatView();
  console.log(currentChatView);
  return (
    <ChatDataProvider>
      <div className="overflow-hidden">
        <div className="h-screen">
          <div className="h-full row">
            <div
              className={
                (currentChatView !== 0 ? "d-none d-lg-block " : "") +
                "container-fluid col-12 col-lg-5 col-xl-4 col-xxl-3 h-full overflow-auto"
              }
            >
              <Peoples />
            </div>
            <div className="container-fluid col- col-lg-7 col-xl-8 col-xxl-9 h-full overflow-auto tab-content">
              <Chat />
            </div>
          </div>
        </div>
      </div>
    </ChatDataProvider>
  );
}
