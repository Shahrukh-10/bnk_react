import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/header/Navbar';
import HomeScreen from './components/main/HomeScreen';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <HomeScreen/>
      </React.Fragment>
    );
  }
}

export default App;
