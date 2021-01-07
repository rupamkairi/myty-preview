import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

//
import MessengerIndex from "./Messenger/Index";
import Error from "../Error";

//
import SideBar from "../../components/Admin/SideBar/SideBar";

export default function AdminIndex() {
  const { url } = useRouteMatch();

  return (
    <div className="overflow-hidden">
      <Router>
        <div className="d-flex">
          <div className="d-none d-lg-block d-xl-block d-xxl-block">
            <SideBar />
          </div>
          <div className="w-full">
            <Switch>
              <Route exact path={url}>
                <p>Admin at {url}</p>
                <p>{`${url}messenger`}</p>
              </Route>
              <Route exact path={`${url}/messenger`}>
                <MessengerIndex />
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
