import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FaMapMarkerAlt } from "react-icons/fa";

const MapComponent = () => {
  useEffect(() => {
    
    const map = L.map('map').setView([44.7866, 20.4489], 13); 

    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    
    const customIcon = L.icon({
      iconUrl: FaMapMarkerAlt,
      iconSize: [80, 80], 
      iconAnchor: [15, 30] 
    });

    
    L.marker([44.7866, 20.4489], { icon: customIcon }).addTo(map)
      .bindPopup('Užička 11, Beograd'); 
  }, []);

  return (
    <div style={{ width: '80%', height: '80%',paddingTop:'100px',  }}>
      <h2 style={{ textAlign: 'center', paddingTop:'30px'}}>Možete nas naći na lokaciji Užička 11, Beograd:</h2>
      <div id="map" style={{ paddingTop:'50px',width: '100%', height: '400px', marginTop: '10px',border: '1px solid #ccc', borderRadius: '5px' ,boxShadow: '0 0 0.8em #FFBD33'}}></div>
    </div>
  );
}

export default MapComponent;