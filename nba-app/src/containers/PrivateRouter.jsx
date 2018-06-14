import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Layout from './Layout';

function PrivateRouter() {
    return (
        <Layout>
            <Switch>
                <Route to="/" component={Home}/>
            </Switch>
        </Layout>
    );
}

export default PrivateRouter;
