import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
//
import { ChatViewProvider } from "../../contexts/ChatViewContext";
import { ChatDataProvider } from "../../contexts/ChatDataContext";
//
import Admin from "./Admin";
import MessengerIndex from "./Messenger/MessengerIndex";
import EditorIndex from "./Editor/EditorIndex";
import SettingsIndex from "./Settings/SettingsIndex";
import Error from "../Error";

//
import SideBar from "../../components/Admin/SideBar/SideBar";

export default function AdminIndex() {
  const { path } = useRouteMatch();

  return (
    <div>
      <Router>
        <div className="d-flex">
          {/* <div className="d-none d-lg-block d-xl-block d-xxl-block"> */}
          <SideBar />
          {/* </div> */}
          <div className="w-full">
            <Switch>
              <Route exact path={path}>
                <Admin />
              </Route>
              <Route exact path={`${path}/messenger`}>
                <ChatViewProvider>
                  <ChatDataProvider>
                    <MessengerIndex />
                  </ChatDataProvider>
                </ChatViewProvider>
              </Route>
              <Route exact path={`${path}/editor`}>
                <EditorIndex />
              </Route>
              <Route exact path={`${path}/settings`}>
                <SettingsIndex />
              </Route>
              <Route exact path={`${path}/*`}>
                <Error />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}
