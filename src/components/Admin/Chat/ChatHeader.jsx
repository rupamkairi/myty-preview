import React from "react";

export default function ChatHeader(props) {
  return (
    <div>
      <span className="fs-6 fw-bold">{props.fullname}</span>
    </div>
  );
}
