import React, { Component } from 'react'
import Person from './Person/Person'
import './App.css'

class App extends Component {
  state = {
    persons: [
      { name: 'Peter', age: 25 },
      { name: 'Max', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 26 },
        { name: 'Maxster', age: 29 },
        { name: 'Stephanie Bombay', age: 23 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Peter', age: 26 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie Bombay', age: 23 }
      ]
    })
  }

  render () {
    const buttonStyle = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    }

    return (
      <div className="App">
          <h1>Hi, I AM REACT</h1>
          <button
            style={buttonStyle}
            onClick={() => this.switchNameHandler('Peter!!!')}>Switch Name</button>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}/>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, '...peter')}
            changed={this.nameChangedHandler}><h2>My Hobbies: Soccer</h2></Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}/>
      </div>
    )
  }
}

export default App
