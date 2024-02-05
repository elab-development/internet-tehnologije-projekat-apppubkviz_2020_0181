import React from 'react'
import Event from './Event';
import Pagination from './Pagination';
import { useState } from 'react';
function Events({events, refresh,filtriraj,vratiSve}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(2);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentEvent = events.slice(firstPostIndex, lastPostIndex);
    const [selectedMonth, setSelectedMonth] = useState('');

    const handleMonthChange = (event) => {
    const selectedMonthValue = event.target.value;

    if (selectedMonthValue === '') {
        setSelectedMonth(selectedMonthValue);
        console.log('Izaberite mesec');
        vratiSve();
    } else {  
      setSelectedMonth(selectedMonthValue);
      const selectedMonthNumber = parseInt(selectedMonthValue, 10) ;
      filtriraj(selectedMonthNumber);    
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
            return <Event data = {event} key = {event.id} inPrijave = {0}  refresh = {refresh} />
          })}
        </div>
        <Pagination totalPosts = {events.length} postsPerPage = {postsPerPage} setCurrentPage = {setCurrentPage} currentPage = {currentPage}/>
      </div>
    );
  };
 
  export default Events;