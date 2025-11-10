import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function StoryPage() {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  useEffect(() => {
    axios.get(`/api/news?topics=general`).then(r => {
      const found = r.data.articles.find(a => a.title === id);
      setStory(found);
    });
  }, [id]);
  return story ? (
    <div>
      <h2>{story.title}</h2>
      <p>{story.description}</p>
      <a href={story.url}>Full Article</a>
    </div>
  ) : <span>Loading...</span>;
}
