import React from 'react';
import Chat from './Chat';

function Chats() {
  return (
    <div className='chats'>
        <Chat 
            name="Sarah"
            message="Hello, how are you?"
            timestamp="35 minutes ago"
            profilePic="https://people.com/thmb/hSnckaV3MCzV9kOE32mBY18w_cs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(396x0:398x2)/Sarah_Michaud-9a014d6f5d8c4698a831e3512826f286.jpeg"
        />
        <Chat
            name="Ellen"
            message="What's up?"
            timestamp="55 minutes ago"
            profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTVFNFblyTkRQZzRD1VP-NR3GdpRYJDVZXB_89QYEeog9rwcW6AgiSr-E2a67o32agRnQ&usqp=CAU"
        />
        <Chat
            name="Sandra"
            message="Ola!"
            timestamp="3 days ago"
            profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS3KH96lpCFn07qwXeuTTx74hb6pLSgOJE3j0-44TRIJPNQH5NTJCvWPrsT6YZ3IvmYFw&usqp=CAU"
        />
        <Chat
            name="Natasha"
            message="Oops there he is"
            timestamp="1 week ago"
            profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwB1ZIInpOOKdZmjCBmB-bV2flxwuim3UcczISG7dFwZWShC19e7Jwb9MFgA-M7utEnjA&usqp=CAU"
        />
    </div>
  )
}

export default Chats;