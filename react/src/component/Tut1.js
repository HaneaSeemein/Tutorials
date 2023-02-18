import React,{Component} from "react";
// import ReactComponent from 'react.Component';
class welcome extends Component {
    constructor(){
        super();
        this.state={
            name: " "
        };
    }
    changemessage(){this.setState({name: "indirect"})}
    render() {
           return (
           <div>
               <h1>Stateful function {this.state.name}</h1>
           <button onClick={() => this.setState({name: "direct"})}>direct function</button>
           <button onClick={() => this.changemessage()}>indirect function</button>
           </div>
               );
    }
}
export default welcome