// src/components/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Estado para almacenar mensajes de error
  const navigate = useNavigate(); // Hook para redirigir

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json(); // Asume que el servidor envía un mensaje de error específico
        throw new Error(errorData.message || 'Login failed');
      }

      const { token } = await response.json();
      localStorage.setItem('token', token);
      navigate('/profile'); // Redirige al usuario a la página de perfil
    } catch (error) {
      setErrorMessage(error.message); // Muestra el mensaje de error específico
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br />
      {errorMessage && <p>{errorMessage}</p>} {/* Muestra mensajes de error */}
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
