import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Page1 from './containers/Page1/Page1';
import Page2 from './containers/Page2/Page2';

export default function AppRouter() {
    return (
        <Switch>
            <Route exact path='/' component={Page1}/>
            <Route exact path='/page2' component={Page2}/>
        </Switch>
    );
};