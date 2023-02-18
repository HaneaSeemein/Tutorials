import React, { Component } from 'react'
class prevstate extends Component {
  constructor() {
    super();
    this.state = {count1:0,count2:0,count3:0,count4:0}
  }
  increment() {
    this.setState({count2:this.state.count2+1},()=>{console.log("callback",this.state.count2)})
    console.log("outside setstate",this.state.count2);
  }
  increment5() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  incremen() {
    this.setState(prevState=>({count2:prevState.count2+1}),()=>{console.log("callback",this.state.count2)})
    console.log("outside setstate",this.state.count2);
  }
  incremen5() {
    this.incremen();
    this.incremen();
    this.incremen();
    this.incremen();
    this.incremen();
  }
  render() {
    return (
      <div>
      <div>count - {this.state.count2}</div>
      <button onClick={()=>this.increment()}>increment</button>
      <div></div>
      <button onClick={()=>this.increment5()}>increment by 5 but wrong</button>
      <button onClick={()=>this.incremen5()}>increment by 5 but right</button>
      <div>Count - {this.state.count1}</div>    
      <button onClick={()=>this.setState({count1:this.state.count1+1})}>increment direct function defination</button>
      </div>
    )
  }
}







export default prevstate