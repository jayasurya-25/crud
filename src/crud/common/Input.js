import React from "react";
import './Input.css';

const Input =(props)=>{
    return(
        <li className="input-box">
        <input type={props.type} placeholder={props.placeholder} id={props.id} value={props.value} onChange={props.onchange}/>
        <label htmlFor={props.for}>{props.label}</label>

        </li>
    )

}
export default Input;