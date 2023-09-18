import { createChatBotMessage } from 'react-chatbot-kit';
import Startbtn from './Startbtn';
import Chatbot from './Chatbot';

const config = {

  initialMessages: [createChatBotMessage(`Hello, Welcome to student info system`,{
    widget:"Startbtn",
  }),
 
],
state:{
  checker:null,
  userData: {
    name:"",
    age:"",
    slot:""

  }
},
  widgets: [
    {
      widgetName: 'Startbtn',
      widgetFunc: (props) => <Startbtn {...props} />,
    },
    {
      widgetName:"calender",
      widgetFunc: (props) => <Chatbot {...props} />,
    },
   
   
  ]
};

export default config;