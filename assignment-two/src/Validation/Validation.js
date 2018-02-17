import React from 'react'

const validation = (props) => {
  let textOutput

  if (props.inputLength < 5) {
    textOutput = (<p>Text too short</p>)
  } else {
    textOutput = (<p>Text long enough</p>)
  }

  return (
    <div className="Validation">
      {textOutput}
    </div>
  )
}

export default validation
