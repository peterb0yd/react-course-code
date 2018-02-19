import React, { PureComponent } from 'react'
import classes from './App.css'

import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass'

class App extends PureComponent {
  constructor (props) {
    super(props)
    console.log('[App.js] inside constructor')
  }

  componentWillMount () {
    console.log('[App.js] inside component will mount')
  }

  componentDidMount () {
    console.log('[App.js] inside component did mount')
  }

  /*** PureComponent has this built-in ***/
  // shouldComponentUpdate (nextProps, nextState) {
  //   console.log('[UPDATE App.js] inside should component update', nextProps, nextState)
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons
  // }

  componentWillUpdate (nextProps, nextState) {
    console.log('[UPDATE App.js] inside component will update', nextProps, nextState)
  }

  componentDidUpdate () {
    console.log('[UPDATE App.js] inside component did update')
  }

  state = {
    persons: [
      { id: 'fjt23', name: 'Peter', age: 22 },
      { id: '43h43', name: 'Max', age: 29 },
      { id: 'ahsdf', name: 'Stephanie', age: 26 }
    ],
    showPersons: false,
    toggleClicked: 0
  }

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
     this.setState((prevState, props) => {
       return {
         showPersons: !doesShow,
         toggleClicked: prevState.toggleClicked + 1
       }
     })
  }

  render () {
    console.log('\n[App.js] inside render')
    let persons

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
      )
    }

    return (
      <React.Fragment>
        <button
          onClick={() => this.setState({ showPersons: true })}>Show Persons</button>
        <Cockpit
          appTitle={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {' ' + this.state.toggleClicked}
        {persons}
      </React.Fragment>
    )
  }
}

export default withClass(App, classes.App)
