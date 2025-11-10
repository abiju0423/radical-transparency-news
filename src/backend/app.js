// Backend API skeleton for Radical Transparency News
// Node.js/Express prototype

const express = require('express');
const app = express();
app.use(express.json());

// Example: GET /api/story/:id returns transparency report
app.get('/api/story/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    glassBox: {
      sources: 28,
      bias: {left: 10, center: 11, right: 7},
      consensus: 5,
      disputes: 2,
      constitution: ['Rule 1','Rule 2','Rule 4']
    },
    article: `<h2>AI Synthesis for Story #${id}</h2><p>A $50B bill was passed today, funding green energy. All sources confirm this will add $40B to the national debt.</p>`,
    pointsOfConflict: [
      {topic: 'Crowd size', details: 'Organizers (10,000), Police (2,000)'}
    ],
    narrativeSpectrum: [
      {side: 'Left', narrative: 'Focus on investment/healthcare'},
      {side: 'Right', narrative: 'Focus on debt/reckless spending'}
    ],
    sources: ['NYT','Fox News','Reuters']
  });
});

// Example: GET /api/topics
app.get('/api/topics', (req, res) => {
  res.json([ 'Politics', 'Finance', 'Tech', 'Wildlife', 'Science', 'World' ]);
});

// Placeholder for news fetch/aggregation endpoints
// ...

// Start server
app.listen(3001, () => {
  console.log('Backend listening on port 3001');
});
