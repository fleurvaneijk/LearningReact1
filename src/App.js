import React, { Component } from 'react';
import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from "./components/ClassComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FunctionalComponent />
        <ClassComponent />
      </div>
    );
  }
}

export default App;
