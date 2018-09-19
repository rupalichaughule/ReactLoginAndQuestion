import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {hashHistory} from 'react-router';

export default class Home extends Component {
  static propTypes = {
    
  }


  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    
  }
  

  handleSubmit(event) {

    alert('Welcome: '+this.state.value);
    this.props.history.push({pathname: '/login', query:{id:this.state.value}}); 
  
  }

  

  

  render() {
   
      
    return (
        <div className="App">
 
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to LOGIN Page</h1>
        </header>
        <p className="App-intro">
       
         </p>
        
         <form align="center" onSubmit={this.handleSubmit}>
         <fieldset>
           <legend><i class="fa fa-dot-circle-o"></i>LOGIN<i class="fa fa-dot-circle-o"></i></legend>
           <label>Email: </label><br></br>
        <input type="text" id="t1" placeholder="Enter You Email" value={this.state.value} onChange={this.handleChange} required/> 
        <br></br>
        <label>Password: </label><br></br>
        <input type="text" placeholder="Enter You Password" required/> 
        <br></br><br></br>
        <input class="btn"
          type="submit" 
          value="Submit" /><h3></h3>
          </fieldset>
          </form>

         
      </div>
    )
  }
};
