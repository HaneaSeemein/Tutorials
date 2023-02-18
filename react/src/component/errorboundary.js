import React, { Component } from 'react'

export class errorboundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
        haError: false
    }
  }
  static getDerivedStateFromError(err) { 
    return {haError: true}
}
  render() {
    if (this.state.haError) {
        return <h1>something went wrong</h1>
    }
    return this.props.children
  }
}

export default errorboundary