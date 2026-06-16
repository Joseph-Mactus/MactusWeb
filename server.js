import express from 'express';
import dotenv from 'dotenv';
import handler from './api/chat.js';

dotenv.config({ path: '.env.local' });

const app = express();
app.use(express.json());

app.all('/api/chat', (req, res) => {
  return handler(req, res);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Local API server running on http://localhost:${PORT}`);
});

// Keep process alive just in case
setInterval(() => {}, 1000 * 60 * 60);
