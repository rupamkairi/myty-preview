import React from "react";
import { Link } from "react-router-dom";
//
import UserButton from "./UserButton";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar bar">
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/">
            <span className="fs-2 fw-bold">Brand</span>
          </Link>
          <Link>
            <span>
              <UserButton />
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
