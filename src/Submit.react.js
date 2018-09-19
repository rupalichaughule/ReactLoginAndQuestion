import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {hashHistory} from 'react-router';

class Submit extends Component {
    handleSubmit(event) {

        this.props.push({pathname: '/home'}); 
      
      }
        
   render() {
       console.log('kkkkkkkkkkkkkkkkkk')
       console.log(this.props)
      return (
         <div>
             <form onSubmit={this.handleSubmit}>
             <h2>Nice! You have submitted {this.props.location.query.ans}</h2>
             <input class="btn" type="submit" value="Go To Home" />
            </form>
              
         </div>
      );
   }
}
export default Submit;