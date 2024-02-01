import React from 'react'
import Event from './Event';

function Events({events, refresh}) {
    const currentEvent = events.slice(0, 5);
  
    return (
      <div className='frame'>
        <h1 className='subtitle'>DOSTUPNI PUB KVIZOVI</h1>
        <div className='events'>
          {currentEvent.map((event) => {
            return <Event data = {event} key = {event.id} inPrijave = {0}  refresh = {refresh} />
          })}
        </div>
        
      </div>
    );
  };

  export default Events;