import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  Landing from './Containers/Landing';
import Routes from './Utils/Routes';

function App() {

  return (
      // <h1 className="App">Landing Page</h1>
      <BrowserRouter>
        <Switch>
          <Route component={Landing} exact path={Routes.Landing} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
