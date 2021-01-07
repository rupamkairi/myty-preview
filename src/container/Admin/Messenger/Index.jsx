import React from "react";
//
import SideBar from "../../../components/Admin/SideBar/SideBar";
import Chat from "../../../components/Admin/Chat/Chat";
import Peoples from "../../../components/Admin/Peoples/Peoples";

export default function MessengerIndex() {
  return (
    <div>
      <div className="h-screen">
        <div className="h-full row">
          <div className="col-12 col-lg-4 h-full">
            <div className="d-flex">
              <div className="d-block d-lg-none d-xl-none d-xxl-none">
                <SideBar />
              </div>
              <div className="w-full">
                <Peoples />
              </div>
            </div>
          </div>
          <div className="container-fluid col-12 col-lg-8 h-full">
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
}
