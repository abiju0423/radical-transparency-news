import React, { useState } from 'react';
import axios from 'axios';
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    axios.post('/api/login', { username, password })
      .then(r => window.localStorage.setItem('token', r.data.token))
      .catch(() => setErr('Invalid login'));
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder='Username' />
      <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' />
      <button type='submit'>Login</button>
      {err && <span>{err}</span>}
    </form>
  );
}
