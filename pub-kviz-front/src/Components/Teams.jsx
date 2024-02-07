import React from 'react'
import Team from './Team';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function Teams() {


    const[teams,setTeams]=useState([]);
    const[ucitani,setUcitani]=useState(0);

    const [teamName, setTeamName] = useState();
    const [teamMembers, setTeamMembers] = useState(); 
    
    let data = new FormData();
    
 
  let config2 = {
    method: 'post',
    url: 'http://127.0.0.1:8000/api/teams',
    headers: {
    'Authorization': 'Bearer '+window.sessionStorage.getItem("auth_token"),
    
  },
  data : data
};

    let config1 = {
        method: 'get',
        url: 'http://127.0.0.1:8000/api/vratiTimoveKorisnika',
        headers: { 
          'Authorization': 'Bearer '+ window.sessionStorage.getItem("auth_token"),
        }
      };

    useEffect(() => {
        if (ucitani===0) {
            axios.request(config1)
            .then((response) => {
              console.log(JSON.stringify(response.data));
              setTeams(response.data.Timovi);
              setUcitani(1);
            })
            .catch((error) => {
              console.log(error);
            });
        }
    }, [ucitani]);

    function insert(){
      if (!teamName || !teamMembers) {
        alert("Sva polja su obavezna");
        return;
      }
    
      
      const parsedTeamMembers = parseInt(teamMembers);
      if (isNaN(parsedTeamMembers) || parsedTeamMembers < 2 || parsedTeamMembers > 5) {
        alert("Broj članova mora biti broj između 2 i 5.");
        return;
      }

      data.append('nazivTima', teamName);
      data.append('brojClanova', teamMembers);
      axios.request(config2)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setUcitani(0);
      })
      .catch((error) => {
        console.log(error);
        alert("Doslo je do greske:"+error.message);
      });

    }

  return (
    <div className='frame'>
      <div className='btns1'>
              <div className='btnsSub1'>
                <div style={{paddingRight:20}}>
                <input style={{ height: 1+"em"}}
                    type='text'
                    placeholder='Naziv tima'
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                />
                </div>
                <div style={{paddingRight:20}}>
                <input style={{ height: 1+"em"}}
                    type='number'
                    placeholder='Broj članova'
                    value={teamMembers}
                    onChange={(e) => setTeamMembers(e.target.value)}
                />
                </div>
                <button className={'btn1'} onClick={() => insert()}>
                    <p>Kreiraj tim</p>
                </button>
          </div>
          </div>
      {teams.length>0 ? (<h1 className='subtitlet'>VAŠI TIMOVI</h1>) : (<h1 className='subtitlet'>NEMA KREIRANIH TIMOVA</h1>)}
      <div className='eventsb'>
        {teams.map((team) => (
          <Team data = {team} key = {team.timID} setUcitani={setUcitani}  />
        ))}
      </div>
      
    </div>
  );
};

export default Teams;