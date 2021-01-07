import React from "react";
//
import BackToPeoples from "./actions/BackToPeoples";
import OptionsMenu from "./actions/OptionsMenu";
import Send from "./actions/Send";
import ChatHeader from "./ChatHeader";
import Threads from "./Threads";
import ChatFooter from "./ChatFooter";
//
import "./Chat.css";

export default function Chat() {
  return (
    <div className="h-full d-flex flex-column justify-content-between">
      <header className="h-bar sticky-top d-flex align-items-center justify-content-between">
        <span>
          <BackToPeoples />
        </span>
        <ChatHeader />
        <span>
          <OptionsMenu />
        </span>
      </header>
      <main className="h-screen">
        <Threads />
      </main>
      <footer className="h-f-bar sticky-bottom d-flex align-items-center justify-content-between">
        <ChatFooter />
        <span>
          <Send />
        </span>
      </footer>
    </div>
  );
}
