import React, {useState} from 'react';

function InputMessage(){

  //This is to create the template of the objects that will later
  //be in the messages array that hold all of the messages
  const [messageInfo, setMessageInfo] = useState({
    name: '',
    text: ''
  });

  //this is the array that will hold our messages 
  const [messages, setMessages] = useState([]);

  const handleInputChange = (event) => {
    setMessageInfo({
      ...messageInfo,
      [event.target.name]: event.target.value
    });
    console.log(`This is the input change: ${event.target.name}: ${event.target.value}`);
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    //finishing up the packaging of the new message for the array
    const newMessage = {
      name: messageInfo.name,
      text: messageInfo.text
    };
    //Actually sending the new message into the array
    setMessages([...messages, newMessage]);
    //this clears out the inputs
    setMessageInfo({
      name: '',
      text: ''
    })
  };

  return(
    <>
      <h1>My Message Board</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name of Messenger:
          <input 
            type="text" 
            name="name" 
            value={messageInfo.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Message to Add:
          <input 
            type="text" 
            name="text" 
            value={messageInfo.text}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit Your Message</button>
      </form>
      {messages.map((message, index)=>(
        <div key={index}>
          <h3>{message.name}</h3>
          <p>{message.text}</p>
        </div>
      ))}
    </>
  );
}

export default InputMessage;

// !!! remember all of the kinds of inputs you can use: !!!
// <input type="button"/>
// <input type="checkbox"/>
// <input type="color"/>
// <input type="date"/>
// <input type="datetime-local"/>
// <input type="email"/>
// <input type="file"/>
// <input type="hidden"/>
// <input type="image"/>
// <input type="month"/>
// <input type="number"/>
// <input type="password"/>
// <input type="radio"/>
// <input type="range"/>
// <input type="reset"/>
// <input type="search"/>
// <input type="submit"/>
// <input type="tel"/>
// <input type="time"/>
// <input type="url"/>
// <input type="week"/>