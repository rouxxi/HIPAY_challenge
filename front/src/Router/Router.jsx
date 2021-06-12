import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../views/Home/Home';
import Header from '../components/Header/Header'
function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={()=> <Home/> }/>
            </Switch>
        </BrowserRouter>
    )
}
export default Router
