import React, { useState } from 'react'
import Event from './Event';
import axios from 'axios';
import { useEffect } from 'react';

function JoinedEvents({}) {
  const [ucitaniDogadjaji,setUcitaniDogadjaji]=useState(0);
  const [events,setEvents]=useState([]);
  let config = {
    method: 'get',
    url: 'http://127.0.0.1:8000/api/vratiDogadjajeKorisnika',
    headers: { 
      'Authorization': 'Bearer '+ window.sessionStorage.getItem("auth_token"),
    }
  };

  useEffect(() => {
    if (ucitaniDogadjaji===0 && window.sessionStorage.getItem("auth_token")!=null) {
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setEvents(response.data.TimDogadjaji);
        setUcitaniDogadjaji(1);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }, [ucitaniDogadjaji]);

  return (
    <div className='frame'>
      {events.length > 0 ? (<h1 className='subtitle'>VAŠI DOGAĐAJI</h1>) : (<h1 className='subtitle'>NEMA PRIJAVLJENIH DOGADJAJA</h1>)}
      <div className='eventsb'>
        {events.map((event) => (
          <Event data = {event} key = {event.timDogadjajID} inPrijave = {1} setUcitaniDogadjaji={setUcitaniDogadjaji}/>
        ))}
      </div>
      
    </div>
  );
};

export default JoinedEvents;