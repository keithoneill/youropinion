import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Views from './components/views/Views';





function App() {
  return (
      <Container fluid>
        <Row>
          <Col style={styles.header}>
            <Header />
            <Views/>
          </Col>
        </Row>
      </Container> 
  );
}

export default App;

const styles={
  header:{
    paddingLeft: '0',
    paddingRight: '0'
  }
}