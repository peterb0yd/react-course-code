import React, { PureComponent } from 'react'
import Person from './Person/Person'

class Persons extends PureComponent {
  constructor(props) {
    super(props)
    console.log('[Persons.js] inside constructor')
  }

  // componentWillMount () {
  //   console.log('[Persons.js] inside component will mount')
  // }
  //
  // componentDidMount () {
  //   console.log('[Persons.js] inside component did mount')
  // }
  //
  // componentWillUnmount () {
  //   console.log('[Persons.js] inside component will unmount')
  // }

  componentWillReceiveProps (nextProps) {
    console.log('[UPDATE Persons.js] inside component will receive props', nextProps)
  }

  /*** PureComponent has this built-in ***/
  // shouldComponentUpdate (nextProps, nextState) {
  //   console.log('[UPDATE Persons.js] inside should component update', nextProps, nextState)
  //   return nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  // }

  componentWillUpdate (nextProps, nextState) {
    console.log('[UPDATE Persons.js] inside component will update', nextProps, nextState)
  }

  componentDidUpdate () {
    console.log('[UPDATE Persons.js] inside component did update')
  }

  render () {
    console.log('[Persons.js] inside render')
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          position={index}
          clicked={() => this.props.clicked(index)}
          changed={(event) => this.props.changed(event, person.id)} />
      )
    })
  }
}

export default Persons
