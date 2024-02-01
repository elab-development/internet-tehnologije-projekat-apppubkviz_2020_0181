import React from 'react'
import Event from './Event';

function JoinedEvents({events,eventNum, remove, removeAll}) {
  return (
    <div className='frame'>
      {eventNum > 0 ? (<h1 className='subtitle'>VAŠI DOGAĐAJI</h1>) : (<h1 className='subtitle'>NEMA PRIJAVLJENIH DOGADJAJA</h1>)}
      <div className='eventsb'>
        {events.map((event) => (
          <Event data = {event} key = {event.id} inPrijave = {1} remove = {remove} />
        ))}
      </div>
      {eventNum > 0 ? (
        <>
        <button className = 'deleteEvents'  onClick={() => removeAll()}>
        <p>Obriši sve dogadjaje</p>
        </button>
        </>
      ) : (<></>)}
    </div>
  );
};

export default JoinedEvents;