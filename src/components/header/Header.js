import React from 'react';
import logo from '../../images/logo192.png';
import { Nav, Navbar } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';
import SearchNews from '../../pages/SearchNews';
import HowItWorks from '../../pages/HowItWorks';
import MyNews from '../../pages/MyNews';
import './Header.css';



function Header() {

    return(
        <div>
        <Navbar className="header" expand="lg" sticky="top">
            <img src={logo} alt="YourOpinionLogo" className="logo"/>
                <Navbar.Brand as={Link} to="/" className="h1">Your Opinion</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
            <Nav className="text-nowrap">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/HowItWorks">How It Works</Nav.Link>
                <Nav.Link as={Link} to="/MyNews">My News Source</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route exact path ='/' component={SearchNews} />
                <Route exact path ='/HowItWorks' component={HowItWorks} />
                <Route exact path ='/MyNews' component={MyNews} />
            </Switch>
        </div>
    )
}

export default Header