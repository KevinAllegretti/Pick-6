import express from 'express';
//import User from '../models/user';

const router = express.Router();

router.get('/leaderboard', async (req, res) => {
  try {
//    const users = await User.find({}).sort({ totalPoints: -1 });
 //   res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
