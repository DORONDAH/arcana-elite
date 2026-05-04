import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Professional Archetype Intelligence Data
const globalTrends: Record<string, number> = {
  magician: 124,
  'high-priestess': 89,
  emperor: 56,
  hermit: 112
};

app.post('/api/results', (req, res) => {
  const { cardId } = req.body;
  if (cardId && globalTrends[cardId] !== undefined) {
    globalTrends[cardId]++;
  }
  res.json({ data: globalTrends, error: null });
});

app.get('/api/trends', (req, res) => {
  res.json({ data: globalTrends, error: null });
});

app.listen(port, () => {
  console.log(`[Stitch Intelligence] Elite Gateway active at http://localhost:${port}`);
});
