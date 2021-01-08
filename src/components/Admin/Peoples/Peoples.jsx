import React from "react";

export default function Peoples() {
  const list = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="container-fluid d-flex flex-column">
      <div className="sticky-top">
        <span className="fs-1 fw-bolder">Peoples</span>
        <div className="input-group my-4">
          <input className="form-control" type="text" />
          <span className="input-group-text">Search</span>
        </div>
      </div>
      <div className="mt-4 flex-grow-1 h-full">
        {list.map((key) => (
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
        ))}
      </div>
    </div>
  );
}
