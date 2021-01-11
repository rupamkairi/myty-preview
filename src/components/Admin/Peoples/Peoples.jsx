import React from "react";
//
import { useChatData } from "../../../contexts/ChatDataContext";
import { useChatView } from "../../../contexts/ChatViewContext";

export default function Peoples() {
  // const list = [0, 1, 2, 3, 4, 5, 6, 7];
  const { changeChatData } = useChatData();
  const { changeChatView } = useChatView();

  return (
    <div className="container-fluid d-flex flex-column">
      <div className="sticky-top">
        <span className="fs-1 fw-bolder">Peoples</span>
        <div className="input-group my-4">
          <input className="form-control" type="text" />
          <span className="input-group-text">Search</span>
        </div>
      </div>
      <div className="mt-4 flex-grow-1 h-full nav nav-pills">
        {/* {list.map((key) => (
          <div
            key={key}
            className="card my-4 py-4 container-fluid rounded-3 d-flex flex-row justify-content-start align-items-center"
          >
            <div className="border rounded-circle me-4 p-2 fs-4">JD</div>
            <div className="d-flex flex-column">
              <span className="fw-bold">John Doe</span>
              <span className="fw-light">Last message</span>
            </div>
          </div>
        ))} */}
        <div
          className="card my-2 py-4 container-fluid rounded-3 d-flex flex-row justify-content-start align-items-center nav-link"
          onClick={() => {
            changeChatData({
              object: "chat_with_johndoe",
            });
            changeChatView(1);
          }}
        >
          {/* <div className="border rounded-circle me-4 p-2 fs-4">JD</div> */}
          <div className="d-flex flex-column overflow-hidden">
            <span className="fw-bold">John Doe</span>
            <div className="fw-light text-truncate">
              We need to discuss the schema for the applicaiton data...urgent.
            </div>
          </div>
        </div>
        <div
          className="card my-2 py-4 container-fluid rounded-3 d-flex flex-row justify-content-start align-items-center nav-link"
          onClick={() => {
            changeChatData({
              object: "chat_with_janedoe",
            });
            changeChatView(1);
          }}
        >
          {/* <div className="border rounded-circle me-4 p-2 fs-4">JD</div> */}
          <div className="d-flex flex-column overflow-hidden">
            <span className="fw-bold">Jane Doe</span>
            <span className="fw-light text-truncate">
              Check out the editor-ui, I made a overhaul.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
