import React from "react";
//
// import SideBar from "../../../components/Admin/SideBar/SideBar";
import Chat from "../../../components/Admin/Chat/Chat";
import Peoples from "../../../components/Admin/Peoples/Peoples";

export default function MessengerIndex() {
  return (
    <div className="overflow-hidden">
      <div className="h-screen">
        <div className="h-full row">
          <div className="container-fluid col-12 col-lg-4 col-xl-3 h-full overflow-auto">
            {/* <div className="d-flex">
              <div className="d-block d-lg-none d-xl-none d-xxl-none">
                <SideBar />
              </div> */}
            <Peoples />
            {/* </div> */}
          </div>
          <div className="container-fluid col-12 col-lg-8 col-xl-9 h-full overflow-auto">
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
}
