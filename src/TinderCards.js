import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import db from './firebase';
import { Unsubscribe } from '@mui/icons-material';


function TinderCards() {
  const [people, setPeople] = useState([]);

  // Piece of code which runs based on a condition
  useEffect(() => {

    const unsubscribe = db
    .collection('people')
    .onSnapshot(snapshot => (
      setPeople(snapshot.docs.map(doc => doc.data()))
    ));
      
    return () => {
      // this is the cleanup...
      unsubscribe();
    };
      //this will run ONCE when the component loads and never again
  }, []);

  return (
    <div>
        <div className='tinderCards_cardContainer'>
          {people.map((person) => (
           <TinderCard 
            className='swipe' 
            key={person.name}
            preventSwipe={['up', 'down']} 
           >
            <div 
            style={{ backgroundImage: `url(${person.url})` }}
            className='card'>
                <h3>{person.name}</h3>
            </div>
           </TinderCard>
          ))}
        </div>
    </div>
  );
}

export default TinderCards;