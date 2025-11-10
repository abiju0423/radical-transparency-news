import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function SectionPage({ section }) {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    axios.get(`/api/news?topics=${section}`)
      .then(r => setStories(r.data.articles));
  }, [section]);
  return (
    <div>
      <h2>{section} Stories</h2>
      <ul>
        {stories.map(story => (
          <li key={story.title}><a href={`/story/${story.title}`}>{story.title}</a></li>
        ))}
      </ul>
    </div>
  );
}
