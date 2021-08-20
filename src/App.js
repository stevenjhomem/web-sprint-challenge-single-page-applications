import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import './App.css';
import Form from './Form.js';
import Home from './Home.js';

const App = () => {
  return (
    <div className = 'mainBody'>
      <header>
        <h2>Lambda Eats</h2>
        <Link to = '/'>
        <button >Home</button>
        </Link>
      </header>
      <Switch>
        <Route exact path = '/' component = {Home}/>
        <Route path = '/pizza' component = {Form}/>
      </Switch>
    </div>
  );
};
export default App;
