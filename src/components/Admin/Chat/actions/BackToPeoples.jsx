import React from "react";
//
import { useChatView } from "../../../../contexts/ChatViewContext";
import { ReactComponent as BackIcon } from "bootstrap-icons/icons/chevron-left.svg";

export default function BackToPeoples() {
  const { changeChatView } = useChatView();
  return (
    <div>
      <button className="btn" onClick={() => changeChatView(0)}>
        <BackIcon />
      </button>
    </div>
  );
}
