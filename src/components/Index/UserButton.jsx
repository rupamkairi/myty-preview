import React from "react";
import { Link } from "react-router-dom";
//
import { ReactComponent as UserIcon } from "bootstrap-icons/icons/person.svg";

export default function UserButton() {
  return (
    <div>
      <Link to="/admin" className="btn me-2 py-2 btn-primary rounded-circle">
        <UserIcon />
      </Link>
      <Link to="/" className="btn btn-secondary">
        Log Out
      </Link>
    </div>
  );
}
