import React from "react";

export default function Thread(props) {
  console.log(props.position);
  return (
    <div
      className={
        props.position === "right" ? "align-self-end" : "align-self-start"
      }
    >
      <p>{props.data.message}</p>
    </div>
  );
}
