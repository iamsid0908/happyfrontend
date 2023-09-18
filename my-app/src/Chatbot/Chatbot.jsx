import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useDispatch } from 'react-redux';
import { setname } from '../feature/user';
import { useNavigate } from 'react-router-dom';


const Chatbot = (props) => {
  const navigate =useNavigate();
  const dispatch =useDispatch();
  const [conversation, setConversation] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  // Function to handle user messages and bot responses
 

  const handleDateSelect = (date) => {
    // Handle date selection, update the state
    setSelectedDate(date);
  };

  const handleTimeSlotSelect = (timeSlot) => {
    // Handle time slot selection, update the state
    setSelectedTimeSlot(timeSlot);
    const val = selectedDate + timeSlot

    props.actionProvider.aftercalender(val)
    props.actionProvider.enterName()
    dispatch(setname({slot:val}));
    

  };

  

  return (
    <>
    <div>
      {/* Render the conversation history */}
      <div className="conversation">
        {conversation.map((message, index) => (
          <div key={index} className={message.sender}>
            {message.text}
          </div>
        ))}
      </div>

      {/* Render the calendar strip */}
      {!selectedDate && (
        <div className="calendar">
          <Calendar onChange={handleDateSelect} />
        </div>
      )}

      {/* Render the time slot options */}
      {selectedDate && !selectedTimeSlot && (
        <div className="time-slots">
          <button onClick={() => handleTimeSlotSelect('Morning')}>Morning</button>
          <button onClick={() => handleTimeSlotSelect('Afternoon')}>Afternoon</button>
          <button onClick={() => handleTimeSlotSelect('Evening')}>Evening</button>
        </div>
      )}
     
    </div>
    
     </>
  );
};

export default Chatbot;
