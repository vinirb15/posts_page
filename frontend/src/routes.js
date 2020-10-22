import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Posts from './pages/singlePost';

const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/posts/:id" component={ Posts } />
    </Switch>
    </BrowserRouter>
);

export default Routes;