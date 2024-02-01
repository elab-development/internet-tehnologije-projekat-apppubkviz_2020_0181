
import NavBar from './Components/NavBar';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import  Events from './Components/Events';
import { useState } from 'react';
import image1 from './slike/breakingbad.jpg';
import image2 from './slike/harrypotter.jpg';
import image3 from './slike/hangergame.jpg';
import image4 from './slike/munje.jpg';
import image5 from './slike/nba.jpg';
import JoinedEvents from './Components/JoinedEvents';

function App() {
  const [events] = useState([
    {
      id: 1,
      title: "Breaking bad",
      image:{jpg:image1},
      description:
        "Da li znate kako se zovu Džesijevi najbolji drugari, mesto odakle je Gas Fring, ili tačnu količinu novca koju je Valter Vajt zaradio tokom cele serije. Ukoliko znate, onda je ovo pravi kviz za vas! Prijavite se i možete osvojiti razne vredne nagrade!",
      date: "20.2.2024.",
      time: "18:00h",
      location: "Kraljice Milice 20, Beograd",
      tagline: "Ja sam taj koji kuca",
    },
    {
      id: 2,
      title: "Harry Potter",
      image:{jpg:image2},
      description:
        "Da li znate koja reč iz Hari Potera se trenutno nalazi u Oksfordovom recniku, ili možda nazive svih Vizlijevih rođaka? Ukoliko znate, prijavite se za ovaj kviz koji će vas ponovo provesti kroz sve tajne odaje Hogvortsa i čarobnjačkog sveta!",
      date: "15.2.2024.",
      time: "20:00h",
      location: "Pozorišni Trg, Novi Sad",
      tagline: "Ti si čarobnjak, Hari"

    },
    {
      id: 3,
      title: "Hanger Games",
      image:{jpg:image3},
      description:
        "Da li znate po čemu je Ketnis Evergrin dobila ime? Takođe, da li znate reč koja najbolje Hejmiča. Ukoliko znate onda je ovo pravi kviz za vas. Pridružite nam se u jednoj fantastičnoj avanturi koju nikada nećete zaboraviti!",
      date: "14.2.2024.",
      time: "13:00h",
      location: "Kraljice Marije 10, Beograd",
      tagline: "Ukoliko mi gorimo, gorećeš i ti sa nama"
    },
    {
      id: 4,
      title: "Srpska kinomatografija",
      image:{jpg:image4},
      description:
        "Ukoliko smatrate da poznajete srpsku kinematografiju, onda je ovo pravi kviz za vas! Oblasti pitanja će se odnositi na imena glumaca, režisera, prepoznavanje različitih scena, i na taj način ćemo testirati vaše poznavanje srpske kinematografije. Očekujemo vas!",
      date: "18.2.2024.",
      time: "18:00h",
      location: "Mileševska 5, Beograd",
      tagline: "Za početak snimićemo jedan kompakt CD"
    },
    {
      id: 5,
      title: "NBA KVIZ",
      image:{jpg:image5},
      description:
        "Da li znate koliko poena je Lebron Džejms najviše dao u svojoj karijeri, ili možda znate koji broj je nosio Peja Stojaković. Ukoliko su odgovori na prethodna pitanja da, ovaj kviz je sigurno za vas! Prijavite se i ukoliko osvojite prvo mesto, dobićete zvaničnu NBA loptu!",
      date: "25.2.2024.",
      time: "21:00h",
      location: "Admirala Geparta, Niš",
      tagline: "Uspeh nije slučajnost, uspeh je zapravo izbor."
    }
    
  ]);

  const [joinedEvents,setJoinedEvents] = useState([]);

  return (
    <div className='App'>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route 
         path = '/' element = {<Events events={events} />}
        />
        <Route
          path = '/events' element = {<JoinedEvents events = {joinedEvents} eventNum = {0} />}
        />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
