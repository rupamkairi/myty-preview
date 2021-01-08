import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

//
import Admin from "./Admin";
import MessengerIndex from "./Messenger/MessengerIndex";
import EditorIndex from "./Editor/EditorIndex";
import SettingsIndex from "./Settings/SettingsIndex";
import Error from "../Error";

//
import SideBar from "../../components/Admin/SideBar/SideBar";

export default function AdminIndex() {
  const { url } = useRouteMatch();

  return (
    <div>
      <Router>
        <div className="d-flex">
          {/* <div className="d-none d-lg-block d-xl-block d-xxl-block"> */}
          <SideBar />
          {/* </div> */}
          <div className="w-full">
            <Switch>
              <Route exact path={url}>
                <Admin />
              </Route>
              <Route exact path={`${url}/messenger`}>
                <MessengerIndex />
              </Route>
              <Route exact path={`${url}/editor`}>
                <EditorIndex />
              </Route>
              <Route exact path={`${url}/settings`}>
                <SettingsIndex />
              </Route>
              <Route path={`${url}/*`}>
                <Error />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}
