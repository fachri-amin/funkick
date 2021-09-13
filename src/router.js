import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {
    Home,
    Event,
    Lapangan,
} from './pages'

const AppRouter = () => (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/event">
            <Event />
        </Route>
        <Route exact path="/lapangan">
            <Lapangan />
        </Route>
    </Switch>
)

export default AppRouter;