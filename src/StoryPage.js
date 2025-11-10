import React, { useState, useEffect } from 'react';
import TransparencyReport from './TransparencyReport';

export default function StoryPage({ storyId }) {
  // Will eventually fetch real data for given storyId
  const [story, setStory] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/story/${storyId}`)
      .then(res => res.json())
      .then(data => setStory(data));
  }, [storyId]);

  if (!story) return <div>Loading story...</div>;

  return (
    <main>
      <header><h2>Transparency Report: Story #{storyId}</h2></header>
      <TransparencyReport storyId={storyId} />
    </main>
  );
}
