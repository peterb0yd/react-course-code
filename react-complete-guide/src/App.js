import React, { Component } from 'react'
import { css, merge } from 'glamor'
import Person from './Person/Person'
import './App.css'

class App extends Component {
  state = {
    persons: [
      { id: 'fjt23', name: 'Peter', age: 25 },
      { id: '43h43', name: 'Max', age: 29 },
      { id: 'ahsdf', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   this.setState({
  //     persons: [
  //       { id: 'fjt23', name: newName, age: 26 },
  //       { id: '43h43', name: 'Maxster', age: 29 },
  //       { id: 'ahsdf', name: 'Stephanie Bombay', age: 23 }
  //     ]
  //   })
  // }

  nameChangedHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex(p => p.id === personId)
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({ persons })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({ persons })
  }

  togglePersonsHandler = (event) => {
     const doesShow = this.state.showPersons
     this.setState({ showPersons: !doesShow })
  }

  render () {
    let style = css({
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'lightgray'
        }
    })

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)} ><h2>My Hobbies: Soccer</h2></Person>
            )
          })}
        </div>
      )

      style = merge(style, { backgroundColor: 'red' })
    }

    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }
    let className = classes.join(' ')

    return (
      <div className="App">
          <h1>Hi, I AM REACT</h1>
          <p className={className}>This is really working!</p>
          <button
            {...style}
            onClick={this.togglePersonsHandler}>Switch Name</button>
          {persons}
      </div>
    )
  }
}

export default App
