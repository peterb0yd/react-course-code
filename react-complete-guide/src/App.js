import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

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

  render () {
    return (
      <div className="App">
          <h1>Hi, I AM REACT</h1>
          // calling handler method in the way shown below can be inefficient!
          <button onClick={() => this.switchNameHandler('Peter!!!')}>Switch Name</button>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}/>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, '...peter')}><h2>My Hobbies: Soccer</h2></Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}/>
      </div>
    )
  }
}

export default App
