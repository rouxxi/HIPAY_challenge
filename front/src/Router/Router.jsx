import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../views/Home/Home';
import Header from '../components/Header/Header'
import Research from '../views/Research/Research';

function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={()=> <Home/> }/>
                <Route exact path='/research' component={()=> <Research/> }/>
            </Switch>
        </BrowserRouter>
    )
}
export default Router
