import React from "react";
//
import { useSettingsView } from "../../../contexts/SettingsViewContext";
//
import SettingsExpansion from "../../../components/Admin/Settings/SettingsExpansion";
import ProfileSettings from "../../../components/Admin/Settings/ProfileSettings";
import SecuritySettings from "../../../components/Admin/Settings/SecuritySettings";

export default function SettingsIndex() {
  const { currentSettingsView } = useSettingsView();
  return (
    <div className="container">
      <p className="fs-1 fw-bold mb-5">Settings</p>
      <div>
        <hr />
        <SettingsExpansion label="Profile Settings" index={1} />
        <div className={currentSettingsView === 1 ? "d-block" : "d-none"}>
          <ProfileSettings />
        </div>
        <hr />
        <SettingsExpansion label="Security Settings" index={2} />
        <div className={currentSettingsView === 2 ? "d-block" : "d-none"}>
          <SecuritySettings />
        </div>
      </div>
    </div>
  );
}
