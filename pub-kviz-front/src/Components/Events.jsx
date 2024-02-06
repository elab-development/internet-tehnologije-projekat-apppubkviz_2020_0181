import React from 'react'
import Event from './Event';
import Pagination from './Pagination';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function Events() {
  const[events,setEvents]=useState([]);
  const[ucitani,setUcitani]=useState(0);

  useEffect(() => {
    if (ucitani===0) {
      axios.get("http://127.0.0.1:8000/api/events").then((res) => {
        console.log(res.data);
        setEvents(res.data.Dogadjaji);
        setUcitani(1);
      });
    }
  }, [ucitani]);


    const[teams,setTeams]=useState([]);
    const[ucitaniTimovi,setUcitaniTimovi]=useState(0);


    let config = {
      method: 'get',
      url: 'http://127.0.0.1:8000/api/vratiTimoveKorisnika',
      headers: { 
        'Authorization': 'Bearer '+ window.sessionStorage.getItem("auth_token"),
      }
    };

    useEffect(() => {
      if (ucitaniTimovi===0) {
        axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setTeams(response.data.Timovi);
          setUcitani(1);
        })
        .catch((error) => {
          console.log(error);
        });
      }
    }, [ucitaniTimovi]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    let currentEvent = []; // Deklaracija van if bloka
    if(events!=null){
      currentEvent = events.slice(firstPostIndex, lastPostIndex);
    }
    

    const [selectedMonth, setSelectedMonth] = useState('');

    const handleMonthChange = (event) => {
    const selectedMonthValue = event.target.value;

    if (selectedMonthValue === '') {
        setSelectedMonth(selectedMonthValue);
        console.log('Izaberite mesec');
        axios.get("http://127.0.0.1:8000/api/events").then((res) => {
          console.log(res.data);
          setEvents(res.data.Dogadjaji);
        });
        
    } else {  
      setSelectedMonth(selectedMonthValue);
      const selectedMonthNumber = parseInt(selectedMonthValue, 10) ;
      axios.get("http://127.0.0.1:8000/api/events/2009/"+selectedMonthNumber).then((res) => {
          console.log(res.data);
          setEvents(res.data.events);
          
        });
         
    } 
  };

    const months = [
      'Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun',
      'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'
    ];
    return (
      <div className='frame'>
        <h1 className='subtitle'>DOSTUPNI PUB KVIZOVI</h1>
        <div >
        <select value={selectedMonth} onChange={handleMonthChange} style={{
          padding: '8px',
          backgroundColor: '#FFBD33',
          borderRadius: '5px',
          width: '200px',  
        }}>
        <option value="">Izaberite mesec</option>
        {months.map((month, index) => (
            <option key={index} value={index + 1}>{month}</option>
        ))}
        </select>

        </div>
        <div className='events'>
          {currentEvent.map((event) => {
            return <Event data = {event} key = {event.dogadjajID} inPrijave = {0} teams = {teams}  />
          })}
        </div>
        {events!=null && (
          <Pagination  totalPosts={events.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}
    />
  )}
        
      </div>
    );
  };
 
  export default Events;