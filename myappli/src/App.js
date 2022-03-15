
import './App.css';
//import React, { Component } from 'react';
import { Form, Row, Col} from 'bootstrap-4-react';

function App() {
  return (
    <div className="App">
      <h1> check point react js </h1>
        <Form className="formulaire">
          
        <Form.Group>
          <label htmlFor="">Name</label>
          <Form.Input type="text" id="exampleInputEmail1" placeholder="Enter name" />
        </Form.Group>
              <Row>
                <Form.LabelCol col="sm-2" htmlFor="staticEmail">Email</Form.LabelCol>
                <Col col="sm-10">
                  <Form.PlainText value="email@example.com"></Form.PlainText>
                </Col>
              </Row>
              <Row>
                <Form.LabelCol col="sm-2" htmlFor="inputPassword">Password</Form.LabelCol>
                <Col col="sm-10">
                  <Form.Input type="password" placeholder="Password" id="inputPassword" />
                </Col>
              </Row>
            
          </Form>
    </div>
  );
}

export default App;
