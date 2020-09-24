import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './components/Routes';





function App() {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col style={styles.header}>
            <Header />
            <Routes/>
          </Col>
        </Row>
      </Container> 
      </Router>
  );
}

export default App;

const styles={
  header:{
    paddingLeft: '0',
    paddingRight: '0'
  }
}