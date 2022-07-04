import React, { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom";
import {SingleNotes}from './SingleNotes'
export const Notes= () => {
    const navigate = useNavigate();
    const userid = JSON.parse(localStorage.getItem("userid"))
    const [data, setData] = useState([])
    const [notes, setNotes] = useState({})


    useEffect(() => {
        if(!userid){
            navigate("/login")
        }
        getNotes();
    }, [userid])
   
    const getNotes = () => {
        fetch(`http://localhost:8080/user/${userid}/notes`)
        .then((response) => response.json())
        .then((response) => {
            setData(response)
        })
        .catch((err) => console.log(err))
    }
    

    const handleChange = (e) => {
        let {name, value} = e.target
        setNotes( {
            ...notes,
            [name] : value
        })
    }

    const handleSubmit = () => {
        let payload = JSON.stringify(notes)
        fetch(`http://localhost:8080/user/${userid}/notes`, {
            headers : {
                "Content-Type" : "application/json"
            },
            method : 'POST',
            body : payload
        })
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
            getNotes();
        })
        .catch((err) => console.log(err))
    }
    return <div>
        <h1>Notes</h1> 
        <div>
            <input type="text" name="title" placeholder="Add title" onChange={handleChange}/>
            <input type="text" name="label" placeholder="Label" onChange={handleChange}/>
            <button type="submit" onClick={handleSubmit}>Add Notes</button>
            <hr/>
            <div>
                {
                 data.map((item)=>{
                    return <SingleNotes key={item.id} title={item.title} label={item.label}/>
                 })
                }
            </div>
        </div>
    </div>
}

