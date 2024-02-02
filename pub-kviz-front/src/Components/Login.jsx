import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({uloguj}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Sva polja su obavezna!');
      return;
    }

    // Ovde možete dodati logiku za obradu podataka sa forme
    console.log('Email:', email);
    console.log('Password:', password);
    uloguj(email);
    
    // Navigacija na drugu stranicu
    navigate('/', { state: { } });
  };

  return (
    <div className="login-container">
      <form onSubmit={HandleSubmit} className="login-form">
        <h1>Dobro došli, prijavite se!</h1>
        <label htmlFor="username">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};




export default Login;