import React, { useState, useEffect } from 'react';
import "./Calender.css"
import { useDispatch } from 'react-redux';
import { setslot } from '../../../feature/user';


function Calender(props) {
  const dispatch = useDispatch();
  const [today, setToday] = useState(new Date());
  const [tomorrow, setTomorrow] = useState(
    new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
  );
  const [dayAfterTomorrow, setDayAfterTomorrow] = useState(
    new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000)
  );

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const [userval,setUserVal] =useState("")
  const [flag,setFlag] =useState(false);
  const [classs,setClass]=useState(true);
  const className = classs? "time-slot":"no"


  const formatDate = (date) => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  useEffect(() => {
    // Update the dates every day at midnight (00:00)
    const updateDates = () => {
      setToday(new Date());
      setTomorrow(new Date(new Date().getTime() + 24 * 60 * 60 * 1000));
      setDayAfterTomorrow(new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000));
    };

    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0); // Set time to midnight (00:00)

    const timeUntilMidnight = midnight - new Date();
    const timerId = setTimeout(() => {
      updateDates();
    }, timeUntilMidnight);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

const handle=(selectedDay)=>{
  const select=formatDate(selectedDay)
  setUserVal(select)
  setFlag(true)
}

  const handleTimeSlotSelect = (timeSlot) => {
        // Handle time slot selection, update the state
        setSelectedTimeSlot(timeSlot);
        const val = userval +" "+ timeSlot
        
        props.actionProvider.aftercalender(val)
        props.actionProvider.enterName() 
        
        setClass(false)
        setSelectedDate(val)
      };
      
      dispatch(setslot({slot:selectedDate}))
      localStorage.setItem("slot",selectedDate)


  return (
    <>
    {!flag ? (
    <div className='dates' >
      <p className='date' onClick={()=>handle(today)}> {formatDate(today)}</p>
      <p className='date'  onClick={()=>handle(tomorrow)}> {formatDate(tomorrow)}</p>
      <p className='date'  onClick={()=>handle(dayAfterTomorrow)}> {formatDate(dayAfterTomorrow)}</p>
    </div>
):(
<div className={className}>
          <button onClick={() => handleTimeSlotSelect('Morning 11AM')}>Morning</button>
          <button onClick={() => handleTimeSlotSelect('Afternoon 1PM')}>Afternoon</button>
          <button onClick={() => handleTimeSlotSelect('Evening 5PM')}>Evening</button>
        </div>
)}
    </>
  );
}

export default Calender;