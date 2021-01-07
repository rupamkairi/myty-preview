import React from "react";
//
import Send from "./actions/Send";

export default function ChatFooter() {
  return (
    <div className="w-full">
      <div className="input-group">
        <textarea
          className="form-control chat-input-textarea"
          type="text"
        ></textarea>
        <span className="input-group-text">
          <Send />
        </span>
      </div>
    </div>
  );
}
