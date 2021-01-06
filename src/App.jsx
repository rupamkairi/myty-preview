// import complete bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// importing grid and flex utilities and contents
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css";
import "bootstrap/dist/css/bootstrap-reboot.min.css";

//
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//
import AdminIndex from "./container/Admin/Index";
import GuestIndex from "./container/Guest/Index";
import Index from "./container/Index/Index";
import Error from "./container/Error";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route exact path="/admin">
            <AdminIndex />
          </Route>
          <Route exact path="/:userId">
            <GuestIndex />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
