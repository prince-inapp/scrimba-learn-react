import React from 'react';
import {useState} from "react";
import './Form.css';

function Form(props){

    const [data, setData] = useState({
        email: '',
        password:'',
        confirmPassword:'',
        newsletter:false
    });

    function onChangeHandler(event){
        const {name, value, type, checked } = event.target;
        setData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }))
        ;

    }
    function onSubmitHandler(event){
        event.preventDefault();
        if(data.password === data.confirmPassword){
            console.log("password match");
        }else{
            console.log("password do not match");
            return;
        }
        if(data.newsletter){
            console.log("thanks to sucribtion");
        }
        console.log(data);

    }

    return(

        <form className="form" onSubmit={onSubmitHandler}>
            <input className="input-fields"
                type="text"
                name="email"
                value={data.email}
                onChange={onChangeHandler}
            />
            <input className="input-fields"
                type="password"
                name="password"
                onChange={onChangeHandler}
                value={data.password}/>

            <input className="input-fields"
                type="password"
                name="confirmPassword"
                onChange={onChangeHandler}
                value={data.confirmPassword}
            />

            <label  className="input-checkbx" htmlFor="newsletter">
            <input className="input-checkbx" type="checkbox"
                name="newsletter"
                onChange={onChangeHandler}
                checked={data.newsletter} />
           I want to join the newsletter</label>

            <input className="input-btn" type="submit" value="Sign Up"/>
        </form>
    )
};

export default Form;