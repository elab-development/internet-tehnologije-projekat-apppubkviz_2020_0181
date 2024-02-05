import React from 'react'
import { Link } from 'react-router-dom';
import { TbBrain } from "react-icons/tb";
import { MdEventAvailable } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import axios from 'axios';

function NavBar({email,ulogovan, uloguj}) {

  let config = {
    method: 'post',
    url: 'http://127.0.0.1:8000/api/logout',
    headers: {
      'Authorization': 'Bearer ' + ulogovan,
    },
  };

  const handleLogout = () => {
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      uloguj(null, null);
    })
    .catch((error) => {
      console.log(error);
    });
  };

    return (
      <div className='navBar'>
        <div className='titleContainer'>
             <h1 className='title'>PubQuiz</h1> 
          </div>         
          
          <h1 className='title' style={{ color: 'white' }}>{ulogovan != null ? email : ''}</h1>
          
          <div className='iconContainer'>
          <Link to = '/' className='link'>
              < TbBrain className='icon'/>
          </Link>
          <Link to = '/events' className='link'>
              <MdEventAvailable className='icon'/>
          </Link>
          {ulogovan == null ? (
            <Link to='/login' className='link'>
              <IoPersonCircleOutline className='icon' />
            </Link>
          ) : (
            <Link to='/login' className='link' onClick={handleLogout}>
              <IoMdLogOut className='icon' />
            </Link>
          )}
          </div>
      </div>
    );
  };
  
  export default NavBar;

