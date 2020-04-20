import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import DetailsPage from './pages/details/details.component';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/details/:id" component={DetailsPage} />
    </Switch>
  );
}

export default App;
