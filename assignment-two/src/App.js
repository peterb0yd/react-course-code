import React, { Component } from 'react';
import './App.css';

import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {
  state = {
    input: ''
  }

  inputChangedHandler = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  removeChar = (charIndex) => {
    let inputList = this.state.input.split('')
    inputList.splice(charIndex, 1)
    let input = inputList.join('')
    this.setState({ input })
  }

  render() {
    let charList
    let inputList = this.state.input.split('')

    if (inputList.length > 0) {
      charList = (
        <div>
          {inputList.map((char, index) => {
            return (
              <Char
                key={index}
                character={char}
                click={() => this.removeChar(index)} />
            )
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <input onChange={(event) => this.inputChangedHandler(event)} value={this.state.input} />
        <p>{this.state.input.length}</p>
        <Validation inputLength={this.state.input.length} />
        {charList}
      </div>
    );
  }
}

export default App;
