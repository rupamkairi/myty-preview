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
  const { url } = useRouteMatch();
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={url}>
            <RichEditor />
          </Route>
          <Route exact path={`${url}/active`}>
            <RichEditor />
          </Route>
          <Route exact path={`${url}/preview`}>
            <RichEditorPreview />
          </Route>
          <Route path={`${url}/*`}>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
