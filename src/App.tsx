import { useAppDispatch } from 'app/hooks';
import { NotFound, PrivateRoute } from 'components/Common';
import Admin from 'components/Layout/Admin';
import LoginPage from 'features/auth/pages/LoginPage';
import { cityActions } from 'features/city/citySlice';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      cityActions.fetchData({
        _page: 1,
        _limit: 100,
      })
    );
  }, [dispatch]);

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
