import React, { Component } from 'react'
import Tut9i from './Tut9i.js';

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {name: 'capybruh'}
  }
  clickHandler =(inherit) => {
    alert(`${this.state.name} ok ${inherit}`);
  }
  render() {
    return (
      <div>
        {/* <button onClick={this.clickHandler}>click</button> */}
        <Tut9i clicked={this.clickHandler}/>
      </div>
    )
  }
}
export default ParentComponent