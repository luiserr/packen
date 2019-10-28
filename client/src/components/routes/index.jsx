import React from 'react';
import Home from '../store';
import Products from '../products';
import Cart from '../car';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products/:brand" component={Products} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}
