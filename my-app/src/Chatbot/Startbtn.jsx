import React from 'react';
import "../App.css"

function Startbtn(props) {

    const initialActions =(e)=>{
        console.log(e.target.innerHTML);
        const val= e.target.innerHTML
        props.actionProvider.initialAction(val)
        props.actionProvider.getCalender();
    }

  return <>
    <div>
        <button className='gotit-btn' onClick={(e)=>initialActions(e)}>Got It</button>
    </div>
    </>
}

export default Startbtn