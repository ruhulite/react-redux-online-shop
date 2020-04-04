import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homePage';
import CartPage from './pages/cart';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/cart" component={CartPage} />
    </Switch>
  );
};

export default Router;
