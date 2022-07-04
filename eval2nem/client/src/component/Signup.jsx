import React, { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom";

export const Signup = () => {
    const [user, setUser] = useState({})

    const navigate = useNavigate();
    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setUser( {...user,[name]: value})
    }

    const handleSubmit = () => {
        let payload = JSON.stringify(user)
        fetch("http://localhost:8080/auth/signup", {
            headers : {
                "Content-Type" : "application/json"
            },
            method : 'POST',
            body : payload
        })
        .then((res) => res.json())
        .then((res) => navigate("/login"))
        .catch((err) => console.log(err))
    }
    return <div>
        <h2>Signup</h2>
        <div>
            <label style={{marginRight:"22px"}} >Name :</label>
            <input type="text"name="name" onChange={handleChange}/>
            <br />
            <label style={{marginRight:"22px"}} >username :</label>
            <input type="text"name="username" onChange={handleChange}/>
            <br />
            <label style={{marginRight:"22px"}} >Email :</label>
            <input type="text"name="email" onChange={handleChange}/>
            <br />
            <label style={{marginRight:"22px"}} >Password :</label>
            <input type="text"name="password" onChange={handleChange}/>
            <br />
            <button type="submit" onClick={handleSubmit}>Sign up :</button>
        </div>
    </div>
}

