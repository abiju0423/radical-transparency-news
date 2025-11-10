import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          onLogin(data.user);
        } else {
          setError('Invalid credentials');
        }
      })
      .catch(() => setError('Auth failed')); 
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      {error && <div style={{color:'red'}}>{error}</div>}
      <label>
        Username:
        <input value={username} onChange={e=>setUsername(e.target.value)} required />
      </label><br />
      <label>
        Password:
        <input type='password' value={password} onChange={e=>setPassword(e.target.value)} required />
      </label><br />
      <button type='submit'>Log In</button>
    </form>
  );
}
