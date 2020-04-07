import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const DetailsPage = ({ match }) => (
  <div>Details on { match.params.id}</div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/details/:id" component={DetailsPage} />
      </Switch>
    </div>
  );
}

export default App;
