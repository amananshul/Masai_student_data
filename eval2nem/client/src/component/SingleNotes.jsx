import React from 'react'

export const SingleNotes = ({title, label,id}) => {
    const userid = localStorage.getItem("userid")
const handleDelete=(id)=>{
    fetch(`http://localhost:8080/user/${userid}/notes/${id}`, {
        method: 'DELETE',
      })
      .then(res => res.json()) // or res.json()
      .then(res => console.log(res))
}
  return (
    <div>
        <h1>{title}</h1>
        <h4>{label}</h4>
        <button>Update</button>
        <button onClick={handleDelete(id)}>Delete</button>
    </div>
  )
}
