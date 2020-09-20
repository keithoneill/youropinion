import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchNews from '../pages/SearchNews';

function Routes() {
    return(
        <section>
            <Switch>
                <Route exact path='/' component={SearchNews} />
            </Switch>
        </section>
    )
}

export default Routes