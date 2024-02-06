
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Register from './Components/Register';
import Teams from './Components/Teams';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import  Events from './Components/Events';
import { useState } from 'react';
import { useEffect } from 'react';



import JoinedEvents from './Components/JoinedEvents';
import axios from 'axios';

function App() {
  const [events,setEvents] = useState();

  const [joinedEvents,setJoinedEvents] = useState([]);
  const [eventNum, setEventNum] = useState(0);
 
  function refreshEvents(id,teamName,teamMembers) {
    if (!joinedEvents.some((event) => event.id === id)) {
     
      let updatedEvents = [...joinedEvents];
      let newEvent = events.find((event) => event.id === id);
    
      updatedEvents.push({
        ...newEvent,
        teamName: teamName,
        teamMembers: teamMembers,
      });
    
      setJoinedEvents(updatedEvents);
      setEventNum(eventNum + 1);
    }
   
  }

  const [email,setEmail] = useState([]);
  const[token,setToken]=useState();

  function postaviUlogovanog(email,token){
    setEmail(email);
    setToken(token);
    window.sessionStorage.setItem("auth_token",token);
    window.sessionStorage.setItem("email",email);
  }
  
  return (
    <div className='App'>
      <BrowserRouter>
      <NavBar email={email} ulogovan={token} uloguj={postaviUlogovanog}/>
      <Routes>
        <Route 
        
         path = '/' element = {
          <>
          
          <Events />
        </>
         }
         
        />
        <Route
          path = '/events' element = {<JoinedEvents events = {joinedEvents}  />}
        />
        <Route
          path = '/login' element = {<Login uloguj={postaviUlogovanog} />}
        />
        <Route
          path = '/register' element = {<Register />}
        />
        <Route
          path = '/teams' element = {<Teams  />}
        />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
