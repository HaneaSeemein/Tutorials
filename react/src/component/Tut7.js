import React, { Component } from 'react'

export class classclick extends Component {
    clicked() {
        alert("clicked");
    }
  render() {
    return (
      <div>
        <button onClick={this.clicked()}>wrong</button>
        <button onClick={this.clicked}>right</button>
        <button onClick={()=>this.clicked}>right(arrow function)</button>
      </div>
    )
  }
}

export default classclick