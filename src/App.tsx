import { NotFound, PrivateRoute } from 'components/Common';
import Admin from 'components/Layout/Admin';
import LoginPage from 'features/auth/pages/LoginPage';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={LoginPage}></Route>
        <PrivateRoute path="/admin" component={Admin}></PrivateRoute>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
