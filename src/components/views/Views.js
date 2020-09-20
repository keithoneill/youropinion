import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import TwoColumnNews from '../../pages/TwoColumnNews';
import ThreeColumnNews from '../../pages/ThreeColumnNews';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import './Views.css';


function Routes() {
    return(
        <MemoryRouter>
                <Switch>
                    <Route path="/ThreeColumnNews">
                        <ThreeColumnNews />
                    </Route>
                    <Route path="/">
                        <TwoColumnNews />
                    </Route>
                </Switch>
                <ButtonToolbar className="buttongroup">
                    <LinkContainer to="/" >
                        <Button className="buttonone buttons">Two Columns</Button>
                    </LinkContainer>
                    <LinkContainer to="/ThreeColumnNews">
                        <Button className="buttontwo buttons">Three Columns</Button>
                    </LinkContainer>
                </ButtonToolbar>
        </MemoryRouter>
    )
}

export default Routes
