import React, { Component } from 'react'

class focusinput extends Component {
  constructor(props){
    super(props);
    this.inputReference = React.createRef()
    this.callbackref = null;
    this.setcbr=(element)=>this.callbackref=element;   
  }
  componentDidMount(){
    alert(this.inputReference);
    if (this.callbackref) this.callbackref.focus();
    else this.inputReference.current.focus();
}
  render() {
    return (
      <div>
        <input type="text" ref={this.inputReference}></input>
        <input type="text" ref={this.setcbr}></input>
      </div>
    )
  }
}

export default focusinput