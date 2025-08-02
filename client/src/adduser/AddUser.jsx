import React from 'react'
import "./adduser.css"
import { Link,useNavigate } from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import toast  from 'react-hot-toast'

const AddUser = () => {
    const users={
        name:"",
        email:"",
        address:"",
    };
    const [user, setUser] = useState(users)
    const naviget=useNavigate()

    const inputhandler=(e)=>{
        const {name,value}= e.target;
        console.log(name,value)
        setUser({...user,[name]:value});
    }
    const submitform=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8000/api/user",user).then((response)=>{
           // console.log("use created successfully.")
            toast.success(response.data.message,{position:"top-center"})
            naviget("/");
        }
        )
        .catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div className="adduser">
        <Link to="/" type="button" class="btn btn-secondary">
            <i class="fa-solid fa-backward"></i> Back
        </Link>
        <h3>Add New user</h3>
        <form className="addUserform" onSubmit={submitform}>
            <div className="inputGroup">
                <label htmlFor="name">Name:</label>
                <input 
                type="text"
                onChange={inputhandler}
                id="name"
                name="name"
                autoComplete="off"
                placeholder="Enter Your Name"/>
            </div>
            <div className="inputGroup">
                <label htmlFor="email">E-mail:</label>
                <input 
                type="email"
                id="email"
                onChange={inputhandler}
                name="email"
                autoComplete="off"
                placeholder="Enter Your email"/>
            </div>
            <div className="inputGroup">
                <label htmlFor="name">Address:</label>
                <input 
                type="text"
                id="address"
                onChange={inputhandler}
                name="address"
                autoComplete="off"
                placeholder="Enter Your Address"/>
            </div>
            <div className="inputGroup">
                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
            </div>
        </form>
        </div>
  )
}

export default AddUser;