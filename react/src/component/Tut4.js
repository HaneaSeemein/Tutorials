import React, { Component } from 'react'

class Destructingclass extends Component {
  render() {
      // const {name,heroname} = this.props
    //   const {state1,state2} = this.state
    return (
      <>
        Destructing class, this is {this.props.name} aka {this.props.heroname}
      </>
    )
  }
}

export default Destructingclass