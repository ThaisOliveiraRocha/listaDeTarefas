import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import './GeradasAutomaticamente/index.css';
import * as serviceWorker from './GeradasAutomaticamente/serviceWorker';
import App from './GeradasAutomaticamente/App';

import Corpo from './Todo-List/Corpo'
import Calendario from './Todo-List/Calendario'
import Agenda from './Todo-List/Agenda'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App}></Route>
            <Route path="/lista" component={Corpo}></Route>
            <Route path="/calendario" component={Calendario}></Route>
            <Route path="/agenda" component={Agenda}></Route>

        </Switch>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
