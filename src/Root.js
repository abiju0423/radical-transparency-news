import React, { useState } from 'react';
import App from './App';
import Login from './Login';

export default function Root() {
  const [user, setUser] = useState(null);
  if (!user) {
    return <Login onLogin={setUser} />;
  }
  return <App user={user} />;
}
