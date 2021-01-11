import React from "react";
//
import { ReactComponent as ExpandIcon } from "bootstrap-icons/icons/caret-down.svg";
//
import { useSettingsView } from "../../../contexts/SettingsViewContext";

export default function SettingsExpansion(props) {
  const { changeSettingsView } = useSettingsView();
  return (
    <div className="d-flex justify-content-between align-items-center">
      <p className="fs-3 fw-bold text-secondary">{props.label}</p>
      <div>
        <button
          className="btn"
          onClick={() => {
            changeSettingsView(props.index);
          }}
        >
          <ExpandIcon className="large-icon" />
        </button>
      </div>
    </div>
  );
}
