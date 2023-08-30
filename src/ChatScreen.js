import React, {useState} from 'react';
import './ChatScreen.css';
import { Avatar } from '@mui/material';

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: "Ellen",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTVFNFblyTkRQZzRD1VP-NR3GdpRYJDVZXB_89QYEeog9rwcW6AgiSr-E2a67o32agRnQ&usqp=CAU",
            message: "What's up?",
        },
        {
            name: "Ellen",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTVFNFblyTkRQZzRD1VP-NR3GdpRYJDVZXB_89QYEeog9rwcW6AgiSr-E2a67o32agRnQ&usqp=CAU",
            message: "How's it going?",
        },
        {
            message: "Hi, How are you Ellen?",
        },
    ]);

    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, {message: input}]);
        setInput("");
    }

  return (
    <div className='ChatScreen'>
    <p className='chatScreen_timestamp'>YOU MATCHED WITH ELLEN ON 10/08/20</p>
    {messages.map(message =>(
        message.name ? (
            <div className='chatScreen_message'>
            <Avatar
                className='chatScreen_image'
                src={message.image}
                alt={message.name}
            />
            <p className='chatScreen_text'>{message.message}</p>
        </div>
        ) : (
            <div className="chatScreen_message">
            <p className='chatScreen_textUser'>{message.message}</p>
            </div>
        )      
    ))}
    <form className='chatScreen_input'>   
            <input 
            value={input}
            onChange={(e)=> setInput(e.target.value)}
            className='chatScreen_inputField'
            type="text" 
            placeholder="Type a Message..." />
            <button
            type='submit'
            className='chatScreen_inputButton'
            onClick={handleSend}>
            SEND
            </button>
    </form>
    </div>
  )
}

export default ChatScreen;