import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { Api_url } from '../server/Mockapi';
import { useNavigate } from 'react-router-dom';

function Read() {
    const[apidata,setApidata]=useState([]);
    const navigate=useNavigate()
    
    const updatehandler= ({id,Name,Age,Place})=>{
        localStorage.setItem('id',id)
        localStorage.setItem('Name',Name)
        localStorage.setItem('Age',Age)
        localStorage.setItem('Place',Place)
        navigate('/Update')
    }

    const deletehandler= async (id)=>{
        await axios.delete(Api_url + id)
        callGetApidata()
    }

    const callGetApidata= async()=> {
        const respone=await axios.get(Api_url)
        setApidata(respone.data)
        // console.log(apidata)
    }
    

    useEffect(()=>{
        callGetApidata();
    },[]);

    return (
        <div>
        <h1>2.READ</h1>
        <table border={1}>
            <tbody>
            <tr>
                <th>NAME</th><th>AGE</th><th>PLACE</th><th>DELETE</th><th>UPDATE</th>
            </tr>
            {/* <tr>
                <td>JAI</td><td>22</td><td>KONAHA</td>
            </tr> */}
            {apidata.map(data=>(
            <tr key={data.id}>
                <td>{data.Name}</td><td>{data.Age}</td><td>{data.Place}</td>
                <td><button onClick={()=>deletehandler(data.id)}>Delete</button></td>
                <td><button onClick={()=>updatehandler(data)}>Update</button></td>
            </tr>))
            }
            </tbody>
        </table>
        </div>
    )
}

export default Read;
