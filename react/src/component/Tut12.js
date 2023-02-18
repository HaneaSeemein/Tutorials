import React, { Component } from 'react'
import Tut12i from './Tut12i.js';

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        alert('mumma constructor')
    }
    static getDerivedStateFromProps(props,state) {
        alert("mumma props to state");
        return null;
    }
    componentDidMount(){
        alert('mumma component Mounted');
        return true;
    }
    shouldComponentUpdate(){
        alert('mumma component update');
        return true;
    }
    getSnapshotBeforeUpdate(){
        alert('mumma component snapshot before update')
        return true;
    }
    componentDidUpdate(){
        alert('mumma component componentDidUpdate')
        return true;
    }
    render() {
        alert("mumma render")
        return (<div>
            <div>lifecycle parent</div>
            <Tut12i/>
        </div>
        )
  }
}

export default Lifecycle