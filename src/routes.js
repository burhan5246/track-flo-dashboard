import React from 'react';
import { Route, Switch } from "react-router-dom";
import Welcome from './component/welcome/welcome';
import Login from './component/login/login';
import PmStart from './component/PM/pmStart';

const Routes = () => {
    return (
        <Switch>
            <Route exact={true} path="/" component={Welcome} />.
            <Route exact={true} path="/login" component={Login} />
            <Route exact={true} path="/pm" component={PmStart} />
        </Switch>
    )    
}

export default Routes;