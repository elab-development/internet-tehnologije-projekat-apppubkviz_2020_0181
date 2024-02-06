import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useState } from 'react';

function Event({data}) {  
     

    return (
      <div className='eventb'>
          
           
          <>
          <div className='dataContainer'>
                <div className='imageContainer'>
                    
                </div>
  
              <div className='dataSubcontainerb'>
                  <h1 style={{marginLeft: 0.72 + "em"}}>{data.nazivTima}</h1>
                  
                  
                  <p className='team' style={{marginLeft: 1.1 + "em"}}> Broj članova: {data.brojClanova}</p>
                      
              
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
          
      </div>
      )
    
  };
  
  export default Event;