import React, { useState } from 'react';
import "../App.css"

function Startbtn(props) {
    const[flag , setFlag]=useState(true)

    const className = flag? 'gotit-btn' : "no"

    const initialActions =(e)=>{
        console.log(e.target.innerHTML);
        const val= e.target.innerHTML
        props.actionProvider.initialAction(val)
        props.actionProvider.getCalender();
        setFlag(false);
    }

  return <>
    <div>
        <button className={className}  onClick={(e)=>initialActions(e)}>Got It</button>
    </div>
    </>
}

export default Startbtn