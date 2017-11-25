import React, { Component } from 'react';
import logo from './gsl-logo.svg';
import './App.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1 className="App-title"></h1>
      </header>
      <div class="body">
        <div className="row">
          <div className="col-md-12"><img src={logo} className="App-logo" alt="logo"></img></div>
        </div>
        <div className="row text-center">
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
          <Button color="success">Login</Button>
        </Form>
        </div>
      </div>
      <footer className="App-footer"></footer>
    </div>
      );
  }
}

export default App;
