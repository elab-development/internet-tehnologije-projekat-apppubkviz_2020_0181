import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = ({uloguj}) => {
  const [userData,setUserData]=useState(
    {
      email:'',
      password:'',
    }
  )
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  
  }

  const HandleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://127.0.0.1:8000/api/login",userData).then((res)=>{
        console.log(res.data);
        uloguj(userData.email,res.data.access_token,res.data.uloga);
        navigate('/', {});
      }).catch((e)=>{
        console.log(e);
        alert('Podaci nisu ispravni.');
      })

      
  };

  return (
    <div className="login-container">
      <form onSubmit={HandleSubmit} className="login-form">
        <h1>Dobro došli, prijavite se!</h1>
        <label htmlFor="username">Email:</label>
        <input
          type="text"
          id="email"
          name='email'
          value={userData.email}
          onChange={handleChange} required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name='password'
          value={userData.password}
          onChange={handleChange} required
        />

        <button type="submit">Login</button>
        <p>Niste registrovani? <Link to="/register">Registrujte se.</Link></p>
      </form>
    </div>
  );
};




export default Login;