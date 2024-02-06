import React from 'react'
import Team from './Team';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function Teams() {


    const[teams,setTeams]=useState([]);
    const[ucitani,setUcitani]=useState(0);
    let config = {
        method: 'get',
        url: 'http://127.0.0.1:8000/api/vratiTimoveKorisnika',
        headers: { 
          'Authorization': 'Bearer '+ window.sessionStorage.getItem("auth_token"),
        }
      };

    useEffect(() => {
        if (ucitani===0) {
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
    }, [ucitani]);

  return (
    <div className='frame'>
      {teams.length>0 ? (<h1 className='subtitle'>VAŠI TIMOVI</h1>) : (<h1 className='subtitle'>NEMA KREIRANIH TIMOVA</h1>)}
      <div className='eventsb'>
        {teams.map((team) => (
          <Team data = {team} key = {team.id}  />
        ))}
      </div>
      {teams.length>0 ? (
        <>
        <button className = 'deleteEvents'>
        <p>Obriši sve timove</p>
        </button>
        </>
      ) : (<></>)}
    </div>
  );
};

export default Teams;