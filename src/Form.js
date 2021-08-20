import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import * as yup from 'yup'
import axios from 'axios'
import './App.css';
import './Form.css';


const schema = yup.object().shape({
    name : yup.string().required('You must enter a name for the order').min(4, 'Name must be more than 4 characters long.'),
    size : yup.string().oneOf(['1','2','3','4'], 'You must pick a size.'),
    Pepperoni : yup.boolean(),
    Mushrooms : yup.boolean(),
    GrilledChicken : yup.boolean(),
    Onions : yup.boolean(),
    special : yup.string(),
})

const initialFormValues = {
    name : '',
    size : '',
    Pepperoni : false,
    Mushrooms : false,
    GrilledChicken : false,
    Onions : false,
    special : ''
}

function Form() {

    const [ formValues, setFormValues ]= useState(initialFormValues)
    const [ errors, setErrors ] = useState({
        name : '',
        size : ''
    })
    const [ order, setOrder ] = useState([])
    const [ disabled, setDisabled ] = useState(true);

    const setFormErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
            .then(() => setErrors({ ...errors, [name] : '' }))
            .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }))
    }

    const change = event => {
        const { checked, name, value, type } = event.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        setFormErrors(name, valueToUse);
        setFormValues({...formValues, [name]: valueToUse})
    };

    useEffect(() => {
        schema.isValid(formValues).then(valid => setDisabled(!valid))
    }, [formValues]);


    const submit = event => {
        event.preventDefault();
        const newOrder = {  
            name : formValues.name.trim(),
            size : formValues.size.trim(),
            Pepperoni : formValues.Pepperoni,
            Mushrooms :formValues.Mushrooms,
            GrilledChicken :formValues.GrilledChicken,
            Onions :formValues.Onions,
            special : formValues.special
        }
        axios.post('https://reqres.in/api/orders', newOrder)
            .then( res => {
                setOrder([res.data, ...order])
                setFormValues(initialFormValues)
            })
            .catch( err => {
                console.error('No Information Received')
            })
    }


    return (
    <div className = 'formPage'>
        <Route path = '/pizza' >
            <form id = 'pizza-form' onSubmit = {submit}>
                <div className = 'formTitle'>Build Your Own Pizza</div>

                <label>
                    Name for the Order:
                    <input
                    value = {formValues.name}
                    name = 'name'
                    type = 'text'
                    placeholder = 'Enter your name here!'
                    onChange = {change}>
                    </input>
                </label>

                <label> Choice of Size (required):
                    <select value = {formValues.size} id = 'size-dropdown' name = 'size' onChange = {change}>
                        <option >-- Select --</option>
                        <option value = '1'>Small</option>
                        <option value = '2'>Medium</option>
                        <option value = '3'>Large</option>
                        <option value = '4'>X-Large</option>
                    </select>
                </label>

                <label> Add toppings (Up to two):

                    <label>
                        <input
                        value = {formValues.Pepperoni}
                        type = 'checkbox'
                        name = 'Pepperoni'
                        value = '1'
                        onChange = {change}></input> Pepperoni
                    </label>
                    
                    <label>
                        <input
                        value = {formValues.Mushrooms}
                        type = 'checkbox'
                        name = 'Mushrooms'
                        value = '2'
                        onChange = {change}></input> Mushrooms
                    </label>

                    <label>
                        <input
                        value = {formValues.GrilledChicken}
                        type = 'checkbox'
                        name = 'GrilledChicken'
                        value = '3'
                        onChange = {change}></input> Grilled Chicken
                    </label>

                    <label>
                        <input
                        value = {formValues.Onions}
                        type = 'checkbox'
                        name = 'Onions'
                        value = '4'
                        onChange = {change}></input> Onions
                    </label>

                </label>

                <label> Special Instructions:
                    <input
                    value = {formValues.special}
                    type = 'text'
                    name = 'special'
                    placeholder = "Anything else?"
                    onChange = {change}></input>
                </label> 

                <label>
                    <button id = 'order-button' type = 'submit'  disabled = {disabled}>Add to Order</button>
                </label>     
            </form>
            <div style ={{color: 'red'}}>
                <div>{errors.name}</div>
                <div>{errors.size}</div>
            </div>
            <div className = 'theOrder'>
                {(order.length !==0) ? order.map( order => 
                <div> 
                    <h2>Who has ordered? {order.name}</h2>
                </div>) : <h2>No Order Yet!</h2>}
            </div>
        </Route>
    </div>
    )

}

export default Form;