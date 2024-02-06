
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register= () => {
  const [formData, setFormData] = useState({
    ime: '',
    prezime: '',
    telefon: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const [passwordStrength, setPasswordStrength] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Provjera snage lozinke i postavljanje odgovarajućeg stanja
    checkPasswordStrength(value);
  };

  const checkPasswordStrength = (password) => {
    const strength =
      password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password)
        ? 'Jaka'
        : 'Slaba';

    setPasswordStrength(strength);
  };

  const validateEmail = (email) => {
    // Jednostavna provjera formata e-mail adrese
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dodajte provjeru valjanosti e-mail adrese prije slanja podataka
    if (validateEmail(formData.email)) {
      axios.post("http://127.0.0.1:8000/api/register",formData).then((res)=>{
        console.log(res.data);
        navigate('/login', {});
      }).catch((e)=>{
        console.log(e);
      })

      // Ovdje možete dodati logiku za slanje podataka na server ili druge postupke registracije
      console.log('Podaci za registraciju:', formData);
    } else {
      alert('Unesite ispravnu e-mail adresu.');
    }
  };

  return (
    <div className="registration-con">
    <form className="registration-form" onSubmit={handleSubmit}>
      <label>
        <div>Ime:</div>
        <input type="text" name="ime" value={formData.firstName} onChange={handleChange} required />
      </label>
      <br />

      <label>
        <div>Prezime:</div>
        <input type="text" name="prezime" value={formData.lastName} onChange={handleChange} required />
      </label>
      <br />

      <label>
        <div>Broj telefona:</div>
        <input type="text" name="telefon" value={formData.phoneNumber} onChange={handleChange} required />
      </label>
      <br />

      <label>
        <div>Email:</div>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        {!validateEmail(formData.email) && <p className="error-text">Unesite ispravnu e-mail adresu.</p>}
      </label>
      <br />

      <label>
        <div>Šifra:</div>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        {passwordStrength && <p className={`password-strength ${passwordStrength.toLowerCase()}`}>{passwordStrength} šifra</p>}
      </label>
      <br />
        <div>
            <button type="submit">Registruj se</button>
        </div>
      
    </form>
    </div>
  );
};

export default Register;