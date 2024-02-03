import React, { useState } from 'react';
import { USERS_BBDD } from './bbdd';
import './styles.css';

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jwt = await onLogin(email, password);
    if (jwt) {
      console.log('Inicio de sesión exitoso');
    } else {
      setErrorMessage('Usuario o contraseña incorrectos'); // Establece el mensaje de error
    }
  };

  return (
    <div>
      {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Muestra el mensaje de error si existe */}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

function Profile({ profile }) {
  return (
    <div >
      <h2>User Profile</h2>
      <div className="profile-info">
        <p>Name: {profile.name}</p>
      </div>
      <div className="profile-info">
        <p>Email: {profile.email}</p>
      </div>
    </div>
  );
}


function App() {
  const [jwt, setJwt] = useState(null);
  const [profile, setProfile] = useState(null);

  const login = async (email, password) => {
    try {
      const user = USERS_BBDD.find(user => user.email === email && user.password === password);
      if (!user) {
        throw new Error('Usuario o contraseña incorrectos');
      }
      const jwtToken = 'your_generated_jwt_token';
      setProfile(user);
      setJwt(jwtToken);
      return jwtToken;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return (
    <div>
      {jwt ? (
        <Profile profile={profile} />
      ) : (
        <LoginForm onLogin={login} />
      )}
    </div>
  );
}

export default App;
