import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
      this.state = {
         name:'',
         cat: '',
         dummyname:''
      }
    }
  handleNameChange=(event)=>{
    this.setState({name:event.target.value})
  }
  handleCatChange=(event)=>{
    this.setState({cat:event.target.value})
  }
  handleSubmit=()=>{
    alert("noise: "+this.state.name+"\ncat: "+this.state.cat+"\ndummy: "+this.state.dummyname)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
            <br/>          
          <label> cant be changed </label>
          <input type="text" value={this.state.dummyname}/>
            <br/>          
          <label> still cant be changed but magical </label>
          <input type="text" value={this.state.name}/>
            <br/>          
          <label> purrfect </label>
          <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
            <br/>          
          <label> cuz why not </label>
          <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
            <br/>
            <label>CATS?!!?!?!??!?!?!?</label>
          <select value={this.state.cat} onChange={this.handleCatChange}>
              <option value=""></option>
              <option value="white">white</option>
              <option value="ginger">ginger</option>
              <option value="blak">blak</option>
              <option value="chicken nuggets">chicken nuggets</option>
          </select>   
            <br/>
          <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form