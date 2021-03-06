import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HashRouter as Router } from 'react-router-dom'





function App() {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col style={styles.header}>
            <Header />
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