import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import DetailsPage from './pages/details/details.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      homepagePosition: 0
    }
  }

  homepagePosition = (pos) => {
    this.setState({ homepagePosition: pos })
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <HomePage setPosition={this.homepagePosition} currentPosition={this.state.homepagePosition} />} />
        <Route path="/details/:id" component={DetailsPage} />
      </Switch>
    );
  }

}

export default App;
