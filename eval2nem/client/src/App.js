import React from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom";
import {Signup} from './component/Signup'
import {Login} from './component/Login'
import { Notes } from './component/Notes';
import { Navbar } from './component/Navbar';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
     
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/view" element={<Notes/>} />
    </Routes>
    </div>
  );
}

export default App;