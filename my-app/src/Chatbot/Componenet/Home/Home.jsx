import React from 'react'
import { useNavigate } from "react-router-dom";
import "./Home.css"

function Home() {
    const navigate = useNavigate()
  return (
    <div className='container'>
        <h1 className='heading'> Want to schedule the meeting </h1>
        <button onClick={()=>{navigate("/meet")}} className='click-btn'> click here </button>
    </div>
  )
}

export default Home
