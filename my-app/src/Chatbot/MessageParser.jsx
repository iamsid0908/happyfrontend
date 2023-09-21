import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setslot } from '../feature/user';


const MessageParser = ({ children, actions }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const[name,setName]=useState("");
  const[age,setAge]=useState("");

  const parse = (messagee) => {
   
    if(children.props.state.checker === "name"){
      setName(messagee);
      localStorage.setItem("name",messagee);
      actions.enterAge();
    }
    dispatch(setslot({name:messagee}))
    if(children.props.state.checker === "age"){
      setAge(messagee);
      localStorage.setItem("age",messagee);
      dispatch(setslot({age:messagee}))
      
      const timer = setTimeout(() => {
        navigate("/display")
      }, 2000)
    
    }
    
   
   
  

   
  };
  

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;