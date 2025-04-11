import express from 'express';
import cors from 'cors';
import { createItem } from './database.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/items', async (req, res) => {
  const { id, title, price } = req.body;
  try {
    await createItem(id, title, price);
    res.status(201).send({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Failed to create item' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
