const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

// Example API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// Serve Next.js static build (explained more below)
app.use(express.static(path.join(__dirname, '../client/.next')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/.next/server/app/index.html'));
  });
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
