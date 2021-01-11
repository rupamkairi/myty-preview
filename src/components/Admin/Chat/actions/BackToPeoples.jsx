import React from "react";
//
import { useChatView } from "../../../../contexts/ChatViewContext";
import { useChatData } from "../../../../contexts/ChatDataContext";
import { ReactComponent as BackIcon } from "bootstrap-icons/icons/chevron-left.svg";

export default function BackToPeoples() {
  const { changeChatView } = useChatView();
  const { changeChatData } = useChatData();
  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          changeChatView(0);
          changeChatData(0);
        }}
      >
        <BackIcon />
      </button>
    </div>
  );
}
