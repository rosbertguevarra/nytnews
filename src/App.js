import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import NavBar from '../src/components/layout/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
        
      </div>
    );
  }
}

export default App;
