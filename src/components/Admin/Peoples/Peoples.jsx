import React from "react";

export default function Peoples() {
  const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <div className="container-fluid">
      <div className="sticky-top">
        <span className="fs-1 fw-bolder">Peoples</span>
        <div className="input-group my-4">
          <input className="form-control" type="text" />
          <span class="input-group-text">Search</span>
        </div>
      </div>
      <div className="mt-4">
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
