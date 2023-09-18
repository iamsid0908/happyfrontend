import React from 'react';
import Chatbot from './Chatbot';
import { useDispatch } from 'react-redux'
import { setname } from '../feature/user';
import { useNavigate } from 'react-router-dom';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const dispatch = useDispatch();
    const initialAction  = (val)=>{
        const message = createChatBotMessage(`${val}`)
        updateState(message);
    }
    const getCalender  = ()=>{
        const message = createChatBotMessage('Pick a Slot',{
          widget:"calender",
        });
        updateState(message);
    }

    const aftercalender = (val)=>{
      const message = createChatBotMessage(`${val}`)
      
      dispatch(setname({slot:val}));
  
      updateState(message)
    }

    const enterName =()=>{
      const message = createChatBotMessage("enter your name")
      updateState(message ,"age")
    }

    const enterAge =()=>{
      const message = createChatBotMessage("enter your age")
      updateState(message)
      
    }
    

    const updateState = (message, checker ="") =>{
        setState((prev)=>({
            ...prev,
            messages:[...prev.messages, message],
            checker
        }))
    }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {initialAction,getCalender,aftercalender,enterName,
          enterAge},
        });
      })}
    </div>
  );
};

export default ActionProvider;