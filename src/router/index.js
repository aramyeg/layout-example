import {MainLayout} from '../containers/layouts/MainLayout';
import {Home, Repositories, Users} from '../containers/views';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';


const MainRouter = () => {

  return(
    <Router>
      <MainLayout >
        <Switch>
          <Route
            exact
            component={Home}
            path="/home"
          />

          <Route
            exact
            path="/repositories"
            component={Repositories}
          />

          <Route
            exact
            path="/users"
            component={Users}
          />

          <Route exact path="/" component={Home} />

        </Switch>
      </MainLayout>
    </Router>
  )
};

export default MainRouter;