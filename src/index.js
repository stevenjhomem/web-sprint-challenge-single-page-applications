import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, link } from "react-router-dom";



ReactDOM.render(<BrowserRouter>
    <body>
        <header>
          <h2>Lambda Eats</h2>
          <button >Home</button>
        </header>
        <App />
    </body>
                </BrowserRouter>, document.getElementById("root"));
