import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {hashHistory} from 'react-router';

class Login extends Component {
    static propTypes = {
    
    }
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) 
      {
        this.setState({value: event.target.value});
        
      }
      
    
      handleSubmit(event) {
    
        this.props.history.push({pathname: '/Submit', query:{ans:this.state.value}}); 
      
      }


   render() {
       console.log('kkkkkkkkkkkkkkkkkk')
       console.log(this.props)
       
      return (
         <div>
            
            <form onSubmit={this.handleSubmit}>

            <h2> Hello, {this.props.location.query.id}</h2>
            <br/>
            <h3>Q. Choose the Correct Answer..</h3>
                <input type="radio" value='Apple' onChange={this.handleChange}/> Apple<br/>
                <input type="radio" value="Mango" onChange={this.handleChange}/> Mango<br/>
                <input type="radio" value="Banana" onChange={this.handleChange}/> Banana<br/> 
                <input type="radio" value="Cherry" onChange={this.handleChange}/> Cherry<br/>

                 <input class="btn" type="submit" value="Submit" />
            </form>
         </div>
      );
   }
}
export default Login;