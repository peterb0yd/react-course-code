import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classes from './Person.css'

import withClass from '../../../hoc/withClass'

class Person extends Component {
  constructor(props) {
    super(props)
    console.log('[Person.js] inside constructor')
  }

  // componentWillMount() {
  //   console.log('[Person.js] inside component will mount')
  // }
  //
  componentDidMount() {
    console.log('[Person.js] inside component did mount')
    if (this.props.position === 1) {
      this.inputElement.focus()
    }
  }
  //
  // componentWillUnmount() {
  //   console.log('[Person.js] inside component will unmount')
  // }

  render() {
    console.log('[Person.js] inside render')
    return (
      <React.Fragment>
        <p onClick={this.props.clicked}>I am {this.props.name} and I am {this.props.age} years old!</p>
        <input
          ref={(inp) => this.inputElement = inp}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}/>
      </React.Fragment>
    )
    // return [
    //   <p onClick={this.props.clicked}>I am {this.props.name} and I am {this.props.age} years old!</p>,
    //   <input onChange={this.props.changed} value={this.props.name}/>,
    //   <button>TEST</button>
    // ]
  }
}

Person.propTypes = {
  click: PropTypes.func,
  changed: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number
}

export default withClass(Person, classes.Person)
