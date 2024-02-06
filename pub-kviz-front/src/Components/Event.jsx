import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useState } from 'react';

function Event({data, inPrijave, teams}) {  

    const [selectedTeam, setSelectedTeam] = useState('');

    const handleTeamChange = (team) => {
    const selectedTeamValue = team.target.value;
    
    if (selectedTeamValue === '') {
        setSelectedTeam(selectedTeamValue);
        console.log('Izaberite tim');
        // axios.get("http://127.0.0.1:8000/api/events").then((res) => {
        //   console.log(res.data);
        //   setEvents(res.data.Dogadjaji);
        // });        
    } else {  
      setSelectedTeam(selectedTeamValue);
    //   axios.get("http://127.0.0.1:8000/api/events/2009/"+selectedMonthNumber).then((res) => {
    //       console.log(res.data);
    //       setEvents(res.data.events);
          
    //     });
         
    } 

    }

    return (
      <div className={inPrijave === 0 ? 'event' : 'eventb'}>
          {inPrijave === 0 ? (
          <>
          
          <div className='dataContainer'>
            

              <div className='dataSubcontainer'>
                  <h1>{data.naziv}</h1>
                  <p className='tagline'>{data.kratakOpis}</p>
                  <p><span style={{fontWeight: 'bold'}}>Datum održavanja</span>: {data.datumOdrzavanja}</p>
                  <p><span style={{fontWeight: 'bold'}}>Vreme održavanja</span>: {data.vremeOdrzavanja}</p>
                  <p><span style={{fontWeight: 'bold'}}>Mesto održavanja</span>: {data.mesto}</p>
              </div>
           </div>
           <p>{data.opis}</p>
  
          <div className='btns'>
              
            {teams.length>0 ?(
                <>
                <div className='btnsSub'>
              <div >
                <select value={selectedTeam} onChange={handleTeamChange} style={{
                backgroundColor: '#FFBD33',
                borderRadius: '5px',
                width: '175px',
                height:'40px',
                marginRight:'15px',
                padding: 0.3 + 'em',
                margin: 0.2 + 'em'
                }}>
                
                {teams.map((team, index) => (
                    <option key={index} value={team.nazivTima}>{team.nazivTima}</option>
                ))}
                </select>

            </div>              
                <button className={'btn1'}>
                    <p>Prijavi tim</p>
                </button>
          </div>
                
                </>):(
                    <>
                    
                    
                    </>
                )
            }
              
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
              <button className='trash'>
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