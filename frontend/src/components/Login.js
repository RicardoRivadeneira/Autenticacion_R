import React, { useState } from 'react';
import { USERS_BBDD } from './bbdd'; // Importa el arreglo USERS_BBDD desde el archivo bbdd.js
import './styles.css'; // Importa el archivo CSS de estilos


function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jwt = await onLogin(email, password);
    if (jwt) {
      console.log('Inicio de sesión exitoso');
      // Aquí podrías redirigir a otra página o realizar otras acciones después del inicio de sesión exitoso
    } else {
      console.log('Error al iniciar sesión');
    }
  };

  return (
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
  );
}

function Profile({ profile }) {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      {/* Other profile information */}
    </div>
  );
}

function App() {
  const [jwt, setJwt] = useState(null);
  const [profile, setProfile] = useState(null);

  const login = async (email, password) => {
    try {
      // Simulación de autenticación verificando los datos del usuario en USERS_BBDD
      const user = USERS_BBDD.find(user => user.email === email && user.password === password);
      if (!user) {
        throw new Error('Usuario o contraseña incorrectos');
      }

      // Simulación de generación de token de sesión
      const jwtToken = 'your_generated_jwt_token';

      // Simulación de solicitud de perfil de usuario
      setProfile(user);

      // Simulación de éxito en el inicio de sesión
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
