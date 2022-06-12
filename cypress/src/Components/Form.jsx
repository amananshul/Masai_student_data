import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Form = () => {
    const [form, setForm] = useState({});
    const [data, setData] = useState([]);
    const [error,setError] = useState(false);
    const handleChange = (e) => {
      const inputName = e.target.name;
      setForm({
        ...form,
        [inputName]: e.target.value,
      });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      post(form);
    };
    const get = () => {
      axios.get("http://localhost:8080/form").then(({ data }) => setData(data));
    };
    const post = (payload) => {
      axios
        .post("http://localhost:8080/form", payload)
        .then(({ data }) => {
          setError(false);
          setData([...data, data])})
        .catch((err)=>setError(true))
    };
    useEffect(() => {
      get();
    }, []);
  return (
    <div>
          <form className="form" onSubmit={handleSubmit}>
        <label>Name: </label>{" "}
        <input
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="Enter name"
          className="input-name"
        />
        <label>Age: </label>{" "}
        <input
          onChange={handleChange}
          name="age"
          type="number"
          placeholder="Ente age"
          className="inputAge"
        />
        <input className="submit-button" type="submit" value="Submit" />
      </form>
      <div className="error">{error && <h2 style={{color:"red"}}>Something goes wrong</h2>}</div>
      <div className="items">
        {data.map((elem, index) => {
          return (
            <div key={index}>
              <h3>
                {elem.name}-{elem.age}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Form