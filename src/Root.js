import React, { useState, useEffect } from 'react';
import Preferences from './Preferences';
import App from './App';
import Login from './Login';

export default function Root() {
  const [user, setUser] = useState(null);
  const [prefs, setPrefs] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:3001/api/preferences/${user.id}`)
        .then(res => res.json())
        .then(data => setPrefs(data.topics));
    }
  }, [user]);

  if (!user) return <Login onLogin={setUser} />;
  if (!prefs.length) return <Preferences user={user} onSave={setPrefs} />;
  return <App user={user} prefs={prefs} />;
}
