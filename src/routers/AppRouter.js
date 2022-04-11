import React from 'react'
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import axios from 'axios';
import { Logging } from '../pages/Logging';
import { AdminView } from '../pages/AdminView';
import { UserView } from '../pages/UserView';

axios.defaults.baseURL = 'http://localhost:8080/api/';
export const AppRouter = () => {
    return (
    <Router>
            <Switch>
                <Route
                    exact 
                    path="/"
                    component={ Logging }
                />
                <Route
                    exact 
                    path="/admin/:firstName/:id"
                    component={ AdminView }
                />
                <Route
                    exact 
                    path="/user/:firstName/:id"
                    component={ UserView }
                />
                <Redirect to="/"/>
            </Switch>
    </Router>
    )
}
