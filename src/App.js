import React, { Component } from 'react'
import MainForm from './containers/MainForm/MainForm';
import { Container } from "semantic-ui-react";
import Personal from "./containers/Personal/Personal";
export default class App extends Component {
  render() {
    return (
      <Container textAlign='center'>
        <MainForm/>
      </Container>
    )
  }
}

