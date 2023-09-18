import React from 'react'
import { useDispatch } from 'react-redux';
import { setname } from '../feature/user';
import { useNavigate } from 'react-router-dom';


const MessageParser = ({ children, actions }) => {
  const navigate =useNavigate();


  const parse = (messagee) => {
    if(children.props.state.checker === "age"){
      actions.enterAge();
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