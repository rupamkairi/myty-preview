import React from "react";

export default function Thread(props) {
  return (
    <div
      className={
        (props.position === "right"
          ? "align-self-end ms-5 rounded-pill border bg-primary bg-gradient text-white"
          : "align-self-start me-5 rounded-pill border bg-secondary bg-gradient text-white") +
        " px-4 py-2 my-2 "
      }
    >
      <p className="my-0">{props.data.message}</p>
    </div>
  );
}
