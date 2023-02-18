import React, { Component } from 'react'

class errorHandling extends Component {
  render() {
    if (this.props.heroname=="Joker") {
        throw new Error("Joker is not a hero joke")
    }
    return (
      <div>
        <h1>
            {this.props.heroname}
        </h1>
      </div>
    )
  }
}

export default errorHandling