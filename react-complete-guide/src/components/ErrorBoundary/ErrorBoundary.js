import React, { Component } from 'react'

/***
* Only use for special cases if
* code is likely to fail due to external party
*/


class ErrorBoundary extends Component {
  state = {
      hasError: false,
      errorMessage: ''
  }

  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorMessage: error })
  }

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>
    } else {
      return this.props.children
    }
  }
}

export default ErrorBoundary
