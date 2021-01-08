import React from "react";
//
import Thread from "./Thread";

export default function Threads() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Thread
        position="left"
        data={{
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nisi, sint natus, magni quam cumque modi mollitia molestiae perspiciatis, quae assumenda officia ea?",
        }}
      />
      <Thread
        position="right"
        data={{ message: "Incidunt voluptas facere modi magni corporis quia?" }}
      />
    </div>
  );
}
