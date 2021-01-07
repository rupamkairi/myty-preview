import React from "react";
import { ReactComponent as OptiionsMenuIcon } from "bootstrap-icons/icons/three-dots-vertical.svg";

export default function OptionsMenu() {
  return (
    <div>
      <button className="btn">
        <OptiionsMenuIcon />
      </button>
    </div>
  );
}
