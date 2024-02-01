import React from 'react'
import Event from './Event';
import Pagination from './Pagination';
import { useState } from 'react';
function Events({events, refresh}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(2);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentEvent = events.slice(firstPostIndex, lastPostIndex);
 
    return (
      <div className='frame'>
        <h1 className='subtitle'>DOSTUPNI PUB KVIZOVI</h1>
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