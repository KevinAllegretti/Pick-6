import express from 'express';
import Pick from '../models/picks'; // Adjust path accordingly

const router = express.Router();

router.get('/currentPicks', async (req, res) => {
  const picks = await Pick.findOne().sort({ timestamp: -1 });
  res.json(picks);
});

router.post('/addPick', async (req, res) => {
  const currentPicks = await Pick.findOne().sort({ timestamp: -1 });
  if (currentPicks && currentPicks.picks.length >= 6) {
    return res.status(400).send({ error: 'You have already made 6 picks. Time for the immortal lock!' });
  }

  const newPick = new Pick(req.body);
  await newPick.save();
  res.json(newPick);
});

router.post('/addImmortalLock', async (req, res) => {
  const currentPicks = await Pick.findOne().sort({ timestamp: -1 });
  if (!currentPicks || currentPicks.picks.length < 6 || currentPicks.immortalLock) {
    return res.status(400).send({ error: 'Either not all picks are made or immortal lock is already set!' });
  }

  currentPicks.immortalLock = req.body;
  await currentPicks.save();
  res.json(currentPicks);
});

export default router;
