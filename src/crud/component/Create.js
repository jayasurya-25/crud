import React,{useState}from "react";
import axios from "axios";
import Input from "../common/Input";
import { Api_url } from "../server/Mockapi";
import { useNavigate } from "react-router-dom";

const Create =() =>{
    const[Name,setName]=useState('')
    const[Age,setAge]=useState('')
    const[Place,setPlace]=useState('')
    const navigate=useNavigate()

    const namehandler=(event)=>{setName(event.target.value)}
    const agehandler=(event)=>{setAge(event.target.value)}
    const placehandler=(event)=>{setPlace(event.target.value)}

    const submithandler= async(event)=>{
        event.preventDefault()       
        console.log(Name)
        console.log(Age)
        console.log(Place)
        await axios.post(Api_url,{
            Name,
            Age,
            Place
        })
        navigate('/Read')
    }

    return(
        <form >
        <h1>1.CREATE</h1>
        <Input label='NAME' for='name' id='name' type='text' placeholder='Enter name'
        value={Name} onchange={namehandler}
        />
        <Input label='AGE' for='age' id='age' type='number' placeholder='Enter age'
        value={Age} onchange={agehandler}
        />
        <Input label='PLACE' for='place' id='place' type='text'
        value={Place} onchange={placehandler}
        />
        <button onClick={submithandler}>submit</button>
        </form>
        

    )
}

export default Create;