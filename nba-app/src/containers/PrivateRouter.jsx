import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Layout from './Layout';
import Articles from './../containers/Articles';

function PrivateRouter() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/articles/:id" component={Articles}/>
            </Switch>
        </Layout>
    );
}

export default PrivateRouter;
