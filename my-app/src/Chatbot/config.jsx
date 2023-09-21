import { createChatBotMessage,createCustomMessage } from 'react-chatbot-kit';
import Startbtn from './Startbtn';
import Chatbot from './Componenet/Calender/Calender';
import CustomMessage from './Componenet/CustomMessage/CustomMessage';

const config = {

  initialMessages: [createChatBotMessage(`Hello, Welcome to student info system`,{
    widget:"Startbtn",
  }),
  createCustomMessage(),
],
state:{
  checker:null,
  userData: {
    name:"",
    age:"",
    slot:""

  }
},
customComponents: {},
  customMessages: {
    custom: (props) => <CustomMessage {...props} />,
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