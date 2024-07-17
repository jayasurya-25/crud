import React,{useEffect,useState} from 'react'
import Input from '../common/Input'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Api_url } from '../server/Mockapi'

function Update() {
    const namehandler=(event)=>{setName(event.target.value)}
    const agehandler=(event)=>{setAge(event.target.value)}
    const placehandler=(event)=>{setPlace(event.target.value)}

    const[id,setId]=useState('')
    const[Name,setName]=useState('')
    const[Age,setAge]=useState('')
    const[Place,setPlace]=useState('')
    const navigate=useNavigate()

    const submithandler = async(event)=>{  
        event.preventDefault()       
        await axios.put(Api_url+id,{
            Name,
            Age,
            Place
        })
        navigate('/Read')
    }

    useEffect(()=>{
        setId(localStorage.getItem('id'))
        setName(localStorage.getItem('Name'))
        setPlace(localStorage.getItem('Place'))
        setAge(localStorage.getItem('Age'))
    },[])

    
    return (
        <form >
        <h1>update</h1>
        <Input label='NAME' for='name' id='name' type='text' placeholder='Enter name'
        value={Name} onchange={namehandler}
        />
        <Input label='AGE' for='age' id='age' type='number' placeholder='Enter age'
        value={Age} onchange={agehandler}
        />
        <Input label='PLACE' for='place' id='place' type='text'
        value={Place} onchange={placehandler}
        />
        <button onClick={submithandler}>Update</button>
        </form>
    )
}

export default Update
