import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Paginas
import Profile from './pages/Profile'
import Directory from './pages/Directory'
import List from './pages/List'
import App from './App'

export default () => {
    return (
        <Router>
            <Switch>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/directory" >
                    <Directory />
                </Route>
                <Route path="/list">
                    <List />
                </Route>
                <Route path="/">
                    <App />
                </Route>
            </Switch>
        </Router>
    )
}