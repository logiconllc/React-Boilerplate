import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  Landing from './Containers/Landing';
import Routes from './Utils/Routes';
import Login from "./Containers/Influencer/Login";

function App() {

  return (
      <BrowserRouter>
        <Switch>
          <Route component={Landing} exact path={Routes.Landing} />
          <Route component={Login} exact path={Routes.Login} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
