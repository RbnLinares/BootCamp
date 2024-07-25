import React, { useState } from 'react';
import axios from 'axios';

function RegisterLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3001/register', { username, password });
      console.log(response.data);
      alert('Usuario registrado exitosamente');
    } catch (error) {
      console.error(error);
      alert('Error al registrar el usuario');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', { username: loginUsername, password: loginPassword });
      console.log(response.data);
      localStorage.setItem('token', response.data.token); // Guardar el token en localStorage
      window.location.href = '/'; // Redireccionar a la página principal
    } catch (error) {
      console.error(error);
      alert('Error al iniciar sesión');
    }
  };

  return (
    <div>
      <h1>Trading Social</h1>
      <div>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Nombre de usuario" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
        <button onClick={handleRegister}>Registrarse</button>
      </div>
      <div>
        <input type="text" value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} placeholder="Nombre de usuario" />
        <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} placeholder="Contraseña" />
        <button onClick={handleLogin}>Iniciar Sesión</button>
      </div>
    </div>
  );
}

export default RegisterLogin;
