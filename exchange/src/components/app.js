import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
// components
import exchange  from './exchange/index';
import gameInit  from './exchange/init';
//import LoginFormContainer from './session/login_form_container';

const App = () => (
  <div>

    <Switch>
        <AuthRoute exact path="/exchange/init/:usAutoId" component={gameInit} />
        {/* <ProtectedRoute exact path="/gameInit" component={gameInit} /> */}
        <Route path="/" component={exchange} /> 
    </Switch>

  </div>
);

export default App;