// Extend backend: /api/preferences for storing/retrieving preferences
const express = require('express');
const app = express();
app.use(express.json());

let userPrefs = {};

app.post('/api/preferences', (req, res) => {
  const { userId, topics } = req.body;
  userPrefs[userId] = topics;
  res.json({ success: true });
});

app.get('/api/preferences/:userId', (req, res) => {
  const { userId } = req.params;
  res.json({ topics: userPrefs[userId] || [] });
});

// ...prior endpoints remain

app.listen(3001, () => {
  console.log('Backend listening on port 3001');
});
