import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <p className="fw-bold">Navbar</p>
          </Link>
        </div>
      </nav>
    </div>
  );
}
