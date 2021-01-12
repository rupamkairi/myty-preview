import React from "react";
//
import { useChatView } from "../../../contexts/ChatViewContext";
import { useChatData } from "../../../contexts/ChatDataContext";
//
import { people } from "../../../data/messenger.json";

export default function People() {
  const { changeChatView } = useChatView();
  const { changeChatData, changeChatThreads } = useChatData();

  // console.log(people);

  return (
    <div className="container-fluid d-flex flex-column">
      <div className="sticky-top">
        <span className="fs-1 fw-bolder">People</span>
        <div className="input-group my-4">
          <input className="form-control" type="text" />
          <span className="input-group-text">Search</span>
        </div>
      </div>
      <div className="mt-4 flex-grow-1 h-full nav">
        {people.map((data) => (
          <div
            className="card my-2 py-4 container-fluid rounded-3 d-flex flex-row justify-content-start align-items-center nav-link position-relative"
            onClick={() => {
              // console.log(data);
              changeChatData(data);
              changeChatThreads(data.chatId);
              changeChatView(1);
            }}
          >
            <span className="fw-light position-absolute top-0 start-0 translate-middle">
              {data.active_status ? (
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                  }}
                  className="rounded-circle bg-primary bg-gradient"
                ></div>
              ) : (
                ""
              )}
            </span>
            <div className="d-flex flex-column ">
              <span className="fw-bold">{data.fullname}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
