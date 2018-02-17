import React from 'react'
import './UserOutput.css'

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <h2>{props.username}</h2>
      <p>I am text. I am text. I am lots of awesome text! Lots of awesome text!</p>
      <p>Woah so cool. Woah so cool. Really really cool. So so so cool OMG so cool.</p>
    </div>
  )
}

export default userOutput
