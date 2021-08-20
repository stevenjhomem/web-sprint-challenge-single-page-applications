import React from "react";
import { Route } from "react-router-dom";
import './App.css';
import './Form.css';

function Form() {

    return (
        <Route path = '/pizza' >
            <form id = 'pizza-form'>
                <div className = 'formTitle'>Build Your Own Pizza</div>
                <label> Choice of Size (required):
                    <select>
                        <option>Select...</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>X-Large</option>
                    </select>
                </label>
                <label> Choice of Sauce (required):
                    <label>
                        <input
                        type = 'radio'
                        name = 'sauceChoice'
                        value = '1'
                        ></input>Original Red
                    </label>
                    <label>
                        <input
                        type = 'radio'
                        name = 'sauceChoice'
                        value = '2'
                        ></input> Garlic Ranch
                    </label>
                    <label>
                        <input
                        type = 'radio'
                        name = 'sauceChoice'
                        value = '3'
                        ></input> BBQ Sauce
                    </label>
                    <label>
                        <input
                        type = 'radio'
                        name = 'sauceChoice'
                        value = '4'
                        ></input> Spinach Alfredo
                    </label>
                </label>
                <label> Add toppings (Up to two):
                    <label>
                        <input
                        type = 'checkbox'
                        name = 'toppingChoice'
                        value = '1'></input> Pepperoni
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        name = 'toppingChoice'
                        value = '2'></input> Mushrooms
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        name = 'toppingChoice'
                        value = '3'></input> Grilled Chicken
                    </label>
                    <label>
                        <input
                        type = 'checkbox'
                        name = 'toppingChoice'
                        value = '4'></input> Onions
                    </label>
                </label>
                <label> Special Instructions:
                    <input
                    id = "bppmn"
                    type = 'text'
                    placeholder = "Anything else?"></input>
                </label> 
                <label>
                    <input
                    type = 'submit'>
                    </input>
                </label>     
            </form>
        </Route>
    )

}

export default Form;