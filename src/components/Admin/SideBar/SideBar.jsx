import React from "react";
import { Link } from "react-router-dom";
//
import { ReactComponent as UserIcon } from "bootstrap-icons/icons/person.svg";
import { ReactComponent as DashboardIcon } from "bootstrap-icons/icons/columns-gap.svg";
import { ReactComponent as EditorIcon } from "bootstrap-icons/icons/pencil-square.svg";
import { ReactComponent as ChatIcon } from "bootstrap-icons/icons/chat-left.svg";
import { ReactComponent as SettingsIcon } from "bootstrap-icons/icons/gear.svg";

export default function SideBar() {
  return (
    <div className="h-screen v-bar sticky-sidebar border d-flex flex-column py-2 justify-content-between align-items-center">
      <div className="py-2">
        <Link to="/admin">
          <UserIcon className="mid-icon" />
        </Link>
      </div>
      <div>
        <div className="py-2">
          <Link to="/admin">
            <DashboardIcon className="mid-icon" />
          </Link>
        </div>
        <div className="py-2">
          <Link to="/admin/editor">
            <EditorIcon className="mid-icon" />
          </Link>
        </div>
        <div className="py-2">
          <Link to="/admin/messenger">
            <ChatIcon className="mid-icon" />
          </Link>
        </div>
      </div>
      <div className="py-2">
        <Link to="/admin/settings">
          <SettingsIcon className="mid-icon" />
        </Link>
      </div>
    </div>
  );
}
