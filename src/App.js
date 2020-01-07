import React, { Component } from 'react'
import MainForm from './containers/MainForm/MainForm';
import { Container } from "semantic-ui-react";
import Personal from "./containers/Personal/Personal";
import Emergency from './containers/Emergency/Emergency'
import Insurance from './containers/Insurance/Insurance';
import Nav from './containers/Nav'
import { Route } from 'react-router-dom';
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="main-form">
        <Container textAlign="center">
          <h1>Patient Registration Form</h1>
          <Nav/>
          <Route exact path='/' component={Personal}/>
          <Route path='/emergency-contact' component={Emergency}/>
          <Route path='/insurance' component={Insurance}/>
        </Container>
      </div>
    );
  }
}

