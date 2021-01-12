import React from "react";

export default function ChatHeader(props) {
  return (
    <div>
      <span className="fs-5 fw-bold text-truncate">{props.fullname}</span>
    </div>
  );
}
