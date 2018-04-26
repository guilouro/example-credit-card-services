import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from 'views/Main';
import CardRegister from 'containers/CardRegister';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
/* eslint-disable react/prefer-stateless-function */

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Main>
                    <Route path="/" component={CardRegister} />
                </Main>
            </Switch>
        );
    }
}

export default Routes;