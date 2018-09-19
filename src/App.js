import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Login.react';
import Home from './Home.react';
import Submit from './Submit.react';


class App extends Component {
  
  
  render() {
    return (
      <Router >
        <div>
          <Route exact={true} path='' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/Submit' component={Submit}/>
          
        </div>
      </Router>
    );

  }
}




export default App;



