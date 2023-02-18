import React, { Component } from 'react'

class eventbindclass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:'Hello'
        }
        // this.clickHandler=this.clickHandler.bind(this);
    }
    clickHandler() {
        alert(this)
    }
    clickHandle=()=> {
      alert(this)
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>wrong</button>
        <div></div>
        <button onClick={()=>this.clickHandler()}>called arrow function</button>
        <button onClick={this.clickHandler.bind(this)}>bind</button>
        <button onClick={this.clickHandle}>defined arrow function</button>
      </div>
    )
  }
}
export default eventbindclass