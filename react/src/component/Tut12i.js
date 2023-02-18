import React, { Component } from 'react'
class Lifecycle extends Component {
    constructor(props) {
        super(props);
        alert('child constructor')
    }
    static getDerivedStateFromProps(props,state) {
        alert("child props to state");
        return null;
    }
    componentDidMount(){
        alert('child component Mounted ggs');
    }
    render() {
        alert("child render")
        return (
            <div>lifecycle of baby</div>
        )
  }
}

export default Lifecycle