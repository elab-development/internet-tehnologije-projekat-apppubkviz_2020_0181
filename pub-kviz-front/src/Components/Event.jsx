import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useState } from 'react';

function Event({data, inPrijave, refresh}) {  
    const [teamName, setTeamName] = useState('');
    const [teamMembers, setTeamMembers] = useState('');  

    return (
      <div className={inPrijave === 0 ? 'event' : 'eventb'}>
          {inPrijave === 0 ? (
          <>
          
          <div className='dataContainer'>
            <div className='imageContainer'>
                <img src={data.image.jpg} alt='Slika'/>
            </div>

              <div className='dataSubcontainer'>
                  <h1>{data.title}</h1>
                  <p className='tagline'>{data.tagline}</p>
                  <p><span style={{fontWeight: 'bold'}}>Datum održavanja</span>: {data.date}</p>
                  <p><span style={{fontWeight: 'bold'}}>Vreme održavanja</span>: {data.time}</p>
                  <p><span style={{fontWeight: 'bold'}}>Mesto održavanja</span>: {data.location}</p>
              </div>
           </div>
           <p>{data.description}</p>
  
          <div className='btns'>
              
  
              <div className='btnsSub'>
                <div style={{paddingRight:20}}>
                <input style={{ height: 3+"em"}}
                    type='text'
                    placeholder='Naziv tima'
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                />
                </div>
                <div style={{paddingRight:20}}>
                <input style={{ height: 3+"em"}}
                    type='number'
                    placeholder='Broj članova'
                    value={teamMembers}
                    onChange={(e) => setTeamMembers(e.target.value)}
                />
                </div>
                <button className={'btn1'} onClick={() => refresh(data.id,teamName,teamMembers)}>
                    <p>Prijavi tim</p>
                </button>
          </div>
          </div>
  
          </>
          ) : (
          <>
          <div className='dataContainer'>
                <div className='imageContainer'>
                    <img src={data.image.jpg} alt='Slika'/>
                </div>
  
              <div className='dataSubcontainerb'>
                  <h1 style={{marginLeft: 0.72 + "em"}}>{data.title}</h1>
                  <p className='datab'>{data.location}</p>
                  <p className='datab'>{data.date} • {data.time}</p>
                  
                  <p className='team' style={{marginLeft: 1.1 + "em"}}>Tim: {data.teamName}, Broj članova: {data.teamMembers}</p>
                      
              
              </div>
           </div>

          <div className='btns'>
              <div className='btnsSub'>
              <button className='trash' >
                  <FaTrashAlt className='btnb'/>
              </button>
          </div>    
          </div>
  
          </>
          )}
      </div>
    );
  };
  
  export default Event;