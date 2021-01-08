import React from "react";
//
import BackToPeoples from "./actions/BackToPeoples";
import OptionsMenu from "./actions/OptionsMenu";
import ChatHeader from "./ChatHeader";
import Threads from "./Threads";
import ChatFooter from "./ChatFooter";
//
import "./Chat.css";

export default function Chat() {
  return (
    <div className="container-fluid h-full d-flex flex-column justify-content-between">
      <header className="h-bar sticky-top d-flex align-items-center justify-content-between">
        <span>
          <BackToPeoples />
        </span>
        <ChatHeader />
        <span>
          <OptionsMenu />
        </span>
      </header>
      <main className="flex-grow-1">
        <Threads />
      </main>
      <footer className="h-f-bar sticky-bottom d-flex align-items-center justify-content-between">
        <ChatFooter />
      </footer>
    </div>
  );
}
