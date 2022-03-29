import * as React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AddEditPage from './pages/AddEditPage';
import ListPage from './pages/ListPage';

export default function Student() {
  const match = useRouteMatch();

  return (
    <Switch>
    <Route path={match.path} exact component={ListPage}></Route>
    <Route path={`${match.path}/add`} component={AddEditPage}></Route>
    <Route
      path={`${match.path}/:studentId`}
      component={AddEditPage}
    ></Route>
  </Switch>
  );
}
