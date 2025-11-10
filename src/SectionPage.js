import React, { useState, useEffect } from 'react';

export default function SectionPage({ section }) {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    // TODO: Replace localhost once deployed
    fetch(`http://localhost:3001/api/topics`)
      .then(res => res.json())
      .then(topics => {
        if (topics.includes(section)) {
          fetch(`http://localhost:3001/api/story/1`).then(res=>res.json()).then(story=>{
            setStories([{ id: 1, summary: story.article, headline: `Sample AI Story for ${section}` }]);
          });
        } else {
          setStories([]);
        }
      });
  }, [section]);

  return (
    <main>
      <header><h2>{section} News</h2></header>
      <ul>
        {stories.map(story => (
          <li key={story.id}>
            <h3>{story.headline}</h3>
            <div dangerouslySetInnerHTML={{__html: story.summary}} />
            <a href={`/story/${story.id}`}>Full Transparency Report</a>
          </li>
        ))}
        {stories.length === 0 && <li>No stories available yet for this section.</li>}
      </ul>
    </main>
  );
}
