import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //       <h1>Hi, I AM REACT</h1>
    //   </div>
    // )
    return React.createElement('h1', null, 'Hi I am REACT')
  }
}

export default App;
