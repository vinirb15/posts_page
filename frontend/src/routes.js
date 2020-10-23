import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Posts from './pages/singlePost';
import Create from './pages/createPost';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/posts/:id" component={Posts} />
            <Route path="/post/new" component={Create} />
        </Switch>
    </BrowserRouter>
);

export default Routes;