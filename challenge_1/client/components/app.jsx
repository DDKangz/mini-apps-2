import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import Nav from './Nav.jsx';
import FavoriteSets from './FavoriteSets.jsx';
import Favorites from './Favorites.jsx';

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/favorites" exact>
          <FavoriteSets />
        </Route>
        <Route path="/favorites/:list" exact>
          <Favorites />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

