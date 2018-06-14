import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';

function PrivateRouter() {
    return (
        <Switch>
            <Route to="/" component={Home}/>
        </Switch>
    );
}

export default PrivateRouter;
