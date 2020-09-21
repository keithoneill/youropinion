import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import TwoColumnNews from '../../pages/TwoColumnNews';
import ThreeColumnNews from '../../pages/ThreeColumnNews';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import './Views.css';
import { Container, Row , Col} from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


function Routes() {
    const renderTooltip1 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        This will dispay the news results in two columns, a left and a right.
    </Tooltip>
    );
    const renderTooltip2 = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            This will dispay the news results in three columns, a left, a right, and center.
        </Tooltip>
        );

    return(
        <MemoryRouter>
            <Container fluid>
                <Row>
                    <Col>
                    <ButtonToolbar className="custom-btn-toolbar">
                        
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip1}>
                            <LinkContainer to="/" >
                                <Button className="buttons">Two Columns</Button>
                            </LinkContainer>
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="left"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip2}>
                            <LinkContainer to="/ThreeColumnNews">
                                <Button className="buttons">Three Columns</Button>
                            </LinkContainer>
                        </OverlayTrigger>
                        
                    </ButtonToolbar>
                    </Col>
                </Row>
            </Container>
                <Switch>
                    <Route path="/ThreeColumnNews">
                        <ThreeColumnNews />
                    </Route>
                    <Route path="/">
                        <TwoColumnNews />
                    </Route>
                </Switch>
                
        </MemoryRouter>
    )
}

export default Routes