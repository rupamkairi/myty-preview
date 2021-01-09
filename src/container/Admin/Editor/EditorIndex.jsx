import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
//
import RichEditor from "../../../components/Admin/RichEditor/RichEditor";
import RichEditorPreview from "../../../components/Admin/RichEditor/RichEditorPreview";
import Error from "../../Error";

export default function EditorIndex() {
  const { path } = useRouteMatch();
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={path}>
            <RichEditor />
          </Route>
          <Route exact path={`${path}/active`}>
            <RichEditor />
          </Route>
          <Route exact path={`${path}/preview`}>
            <RichEditorPreview />
          </Route>
          <Route path={`${path}/*`}>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
