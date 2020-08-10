import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import AdminPage from "../Pages/AdminPage";
import NotFoundPage from "../Pages/NotFoundPage";
import PostDetail from "../Pages/PostCreation";

const history = createHistory();

export default class AppRouter extends React.Component {
  render() {
    return (
      <Router history={history}>
          <Switch>
            <Route exact path="/" component={AdminPage} />
            <Route path="/postcreation" component={PostDetail} />
            <Route path="/notfound" component={NotFoundPage} />
          </Switch>
        </Router>
    );
  }
}