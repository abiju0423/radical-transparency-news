// Extend backend: POST /api/login endpoint
const express = require('express');
const app = express();
app.use(express.json());

// Login authentication (simulated for now)
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  // Simple stub logic - replace with real DB/account logic or OAuth
  if(username==='demo' && password==='demo') {
    res.json({ success: true, user: { username, id:1 } });
  } else {
    res.json({ success: false });
  }
});

// ... prior endpoints remain unchanged

app.listen(3001, () => {
  console.log('Backend listening on port 3001');
});
