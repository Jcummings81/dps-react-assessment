import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Flash from './Flash';
import Home from './Home';
import Beer from './Beer'
import Brewery from './Brewery'
import Hopsin from './Hopsin'
import RandomBeer from './RandomBeer'
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Segment style={styles.background}>
        <NavBar />
        <Flash />
        <Switch>
        <Route exact path='/Hopsin' component={Hopsin} />
          <Route exact path='/RandomBeer' component={RandomBeer} />
          <Route exact path='/Brewery' component={Brewery} />
          <Route exact path='/Beer' component={ Beer } />
          <Route exact path='/' component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </Segment>
    );
  }
}

const styles = {
  background: {
    backgroundColor: 'black',
  },
}

export default App;
