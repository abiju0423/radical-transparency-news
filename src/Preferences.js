import React, { useState, useEffect } from 'react';

export default function Preferences({ user, onSave }) {
  const [topics, setTopics] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/topics')
      .then(res => res.json())
      .then(setTopics);
  }, []);

  function handleChange(topic) {
    setSelected(s =>
      s.includes(topic) ? s.filter(t => t !== topic) : [...s, topic]
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:3001/api/preferences', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: user.id, topics: selected })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) onSave(selected);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>News Topic Preferences</h2>
      <ul>
        {topics.map(topic => (
          <li key={topic}>
            <label>
              <input type='checkbox' checked={selected.includes(topic)}
                onChange={()=>handleChange(topic)} />
              {topic}
            </label>
          </li>
        ))}
      </ul>
      <button type='submit'>Save Preferences</button>
    </form>
  );
}
