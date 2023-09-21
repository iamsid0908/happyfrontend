import React, { useState ,useEffect} from 'react'
import { useSelector } from 'react-redux'

function Display() {
  const [flag,setFlag]=useState(false);
  const [seconds, setSeconds] = useState(5);
  const name = localStorage.getItem("name")
  const age = localStorage.getItem("age")
  const slot = localStorage.getItem("slot")
 const timer= setTimeout(()=>{
    setFlag(true)
  },5000)
  
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 1) {
        setSeconds(seconds - 1);
      }
    }, 1000); 

    // Clear the timer if the component unmounts
    return () => clearInterval(timer);
  }, [ seconds]);
  
  if(flag === true){
    console.log("hi")
    clearTimeout(timer) 
  }
  

  return (
    <div>
      {!flag ?(
         <div>Wait for {seconds}</div>
      ):(
        <>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Slot: {slot}</p>
        </>
      )}
     
     
    </div>
  )
}

export default Display