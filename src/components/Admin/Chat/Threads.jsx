import React from "react";
//
import Thread from "./Thread";
//
import { useChatData } from "../../../contexts/ChatDataContext";

export default function Threads() {
  const { currentChatThreads } = useChatData();
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      {currentChatThreads.map((data) => {
        return (
          <Thread
            position={data.by_user === 0 ? "right" : "left"}
            data={{
              message: data.message,
            }}
          />
        );
      })}
    </div>
  );
}
