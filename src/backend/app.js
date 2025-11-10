const express = require('express');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());

const NEWS_API_KEY = '4af079e1e0784f118148812814c2ce41';
let userPrefs = {};
let users = {
  demo: {
    username: 'demo', password: bcrypt.hashSync('demo', 10)
  }
}; // replace with real DB in production

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users[username];
  if (!user || !bcrypt.compareSync(password, user.password)) return res.status(401).json({ success:false, message:'Invalid login.' });
  const token = jwt.sign({ username }, 'secret', { expiresIn: '1h' });
  res.json({ success:true, token });
});

app.post('/api/preferences', (req, res) => {
  const { userId, topics } = req.body;
  userPrefs[userId] = topics;
  res.json({ success: true });
});

app.get('/api/preferences/:userId', (req, res) => {
  const { userId } = req.params;
  res.json({ topics: userPrefs[userId] || [] });
});

// NewsAPI endpoint
app.get('/api/news', async (req, res) => {
  const topics = req.query.topics ? req.query.topics.split(',') : ['general'];
  try {
    const newsPromises = topics.map(topic =>
      axios.get(`https://newsapi.org/v2/top-headlines?apiKey=${NEWS_API_KEY}&category=${topic}&country=us&pageSize=10`)
    );
    const responses = await Promise.all(newsPromises);
    const articles = responses.map(r=> r.data.articles).flat();
    res.json({ articles });
  } catch (err) {
    res.status(500).json({ error:'Failed to fetch news', detail: err.message });
  }
});

// Claims endpoint (stub, to connect real claim extraction/NLP)
app.get('/api/claims/:storyId', (req, res) => {
  // In production: analyze story text by storyId, extract claim list, sources, conflict points
  res.json({ claims: [
    { id:1, text: 'Climate change is accelerating.', sources: ['Reuters', 'NYT'], disputed: false },
    { id:2, text: 'US unemployment fell last month.', sources: ['WSJ', 'AP'], disputed: true }
  ] });
});

app.listen(3001, () => {
  console.log('Backend listening on port 3001');
});
