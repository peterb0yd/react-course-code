import React from 'react'
import classes from './Cockpit.css'

// import Aux from '../../hoc/Aux'

const cockpit = (props) => {
  let persons = null
  let btnClass = classes.Button

  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(' ')
  }

  const assignedClasses = []
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red)
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold)
  }
  let assignedClassesName = assignedClasses.join(' ')

  return (
    <React.Fragment>
      <h1>{props.appTitle}</h1>
      <p className={assignedClassesName}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Switch Name</button>
    </React.Fragment>
  )
}

export default cockpit
