import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchNews from '.././pages/SearchNews'

class Routes extends Component {
    render(){
        return(
            <section>
                <Switch>
                    <Route exact path='/' component={SearchNews} />
                </Switch>
            </section>
        )
    }
}

export default Routes
