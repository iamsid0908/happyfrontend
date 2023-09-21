import React from 'react';
import Chatbot from './Componenet/Calender/Calender';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { createCustomMessage } from 'react-chatbot-kit';
import { setslot } from '../feature/user';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const dispatch = useDispatch();
    const initialAction  = (val)=>{
        const message = createCustomMessage(`${val}`,"user")
        updateState(message);
    }
    const getCalender  = ()=>{
        const message = createChatBotMessage('Pick a Slot',{
          widget:"calender",
        });
        updateState(message);
    }

    const aftercalender = (val)=>{
      const message = createCustomMessage(`${val}`,"user")
      updateState(message);
    }

    const enterName =()=>{
      const message = createChatBotMessage("enter your name")
      updateState(message ,"name")
    }

    const enterAge =()=>{
      const message = createChatBotMessage("enter your age")
      updateState(message,"age")

      
      
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