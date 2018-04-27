import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from 'views/Main';
import List from 'views/List';
import Register from 'views/Register';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
/* eslint-disable react/prefer-stateless-function */

class Routes extends React.Component {
    render() {
        return (
            <Main>
                <Switch>
                    <Route exact path="/" component={Register} />
                    <Route path="/list" component={List} />
                    <Route path="/edit/:id" component={Register} />
                </Switch>
            </Main>
        );
    }
}

export default Routes;
