import React from 'react'
import { Link } from 'react-router-dom';
import { TbBrain } from "react-icons/tb";
import { MdEventAvailable } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";

function NavBar(email,ulogovan) {
    return (
      <div className='navBar'>
        <div className='titleContainer'>
             <h1 className='title'>PubQuiz</h1> 
          </div>
          
          
          {ulogovan === 1 ?(<h1 className='title'style={{ color: 'white' }}>email</h1>):(<></>) }
          
          <div className='iconContainer'>
          <Link to = '/' className='link'>
              < TbBrain className='icon'/>
          </Link>
          <Link to = '/events' className='link'>
              <MdEventAvailable className='icon'/>
          </Link>
          <Link to = '/login' className='link'>
              <IoPersonCircleOutline className='icon'/>
          </Link>
          </div>
      </div>
    );
  };
  
  export default NavBar;

