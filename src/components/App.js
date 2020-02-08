import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../Routes/Routes';
import Nav from './Nav/Nav';
import MovieLoader from './Loader/Loader';

const App = () => {
  return (
    <Suspense fallback={MovieLoader}>
      <Nav />
      <Switch>
        <Route
          path={routes.HOME_PAGE.path}
          exact
          component={routes.HOME_PAGE.component}
        />
        <Route
          path={routes.MOVIEDETAILS_PAGE.path}
          component={routes.MOVIEDETAILS_PAGE.component}
        />
        <Route
          path={routes.MOVIES_PAGE.path}
          component={routes.MOVIES_PAGE.component}
        />
      </Switch>
    </Suspense>
  );
};

export default App;
