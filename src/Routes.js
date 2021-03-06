import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Detail from "./Pages/Detail/Detail";
import UserProfile from "./Pages/UserProfile/UserProfile";
import Collection from "./Pages/Collection/Collection";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/contents/:id" component={Detail} />
          <Route exact path="/users/:id" component={UserProfile} />
          <Route exact path="/collection/:id" component={Collection} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
