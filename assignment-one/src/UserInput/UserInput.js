import React from 'react'
import './UserInput.css'

const userInput = (props) => {
  const inputStyle = {
    'border': '2px solid blue',
    'padding': '15px',
    'font-size': '30px',
    'margin': '20px auto',
    'box-shadow': '0px 2px 10px hsla(0, 100%, 10%, 0.6)'
  }

  return (
    <div className="UserInput">
      <input style={inputStyle} onChange={props.changed} value={props.username}/>
    </div>
  )
}

export default userInput
