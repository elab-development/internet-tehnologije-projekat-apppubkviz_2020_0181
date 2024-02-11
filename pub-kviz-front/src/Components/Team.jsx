import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';
import slika1 from "../slike/tim.jpg";
function Team({data,setUcitani}) { 
    


    function deleteTeam(id){
        let config = {
            method: 'delete',
            
            url: 'http://127.0.0.1:8000/api/teams/'+id,
            headers: {
              'Authorization': 'Bearer '+window.sessionStorage.getItem("auth_token"),
            },
            
          };
          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            setUcitani(0);
            alert("Uspešno obrisan tim.");
          })
          .catch((error) => {
            console.log(error);
            alert("Ne možete obrisati tim.");
          });

    } 


    return (
      <div className='eventb'>   
          <>
          <div className='dataContainer'>
                <div className='imageContainer'>
                  <img src={slika1} alt="Slika" />
                </div>
  
              <div className='dataSubcontainerb'>
                  <h1 style={{marginLeft: 0.72 + "em"}}>{data.nazivTima}</h1>
                  
                  
                  <p className='team' style={{marginLeft: 1.1 + "em"}}> Broj članova: {data.brojClanova}</p>
                      
              
              </div>
           </div>

          <div className='btns'>
              <div className='btnsSub'>
              <button className='trash' onClick={() => deleteTeam(data.timID)}>
                  <FaTrashAlt className='btnb'/>
              </button>
          </div>    
          </div>
  
          </>
          
      </div>
      )
    
  };
  
  export default Team;