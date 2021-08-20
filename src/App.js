import React from "react";
import { Route } from "react-router-dom";
import './App.css';

const App = () => {
  return (
        <div className = 'home'>
              <h1>Your favorite food, delivered while coding</h1>
              <button id = 'order-pizza' >Pizza?</button>
        </div>
  );
};
export default App;
