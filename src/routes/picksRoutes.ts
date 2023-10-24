import express from 'express';
import { connectToDatabase } from '../microservices/connectDB';
const router = express.Router();
router.post('/api/savePicks/:username', async (req, res) => {

  try {
      const username = req.params.username;

      // Extract data from request
      const { picks, immortalLock } = req.body;

      // Connect to database and save
      const database = await connectToDatabase();
      const picksCollection = database.collection('userPicks');

      // Save to database using username as a reference
      await picksCollection.insertOne({
          username,
          picks,
          immortalLock
      });

      res.json({ success: true });
  } catch (error) {
      console.error('Error saving picks:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// New route to reset user picks
router.post('/api/resetPicks/:username', async (req, res) => {
    try {
        const username = req.params.username;
        
        // Connect to the database
        const database = await connectToDatabase();
        const picksCollection = database.collection('userPicks');
        
        // Update the user's picks and immortal lock to empty arrays
        await picksCollection.updateOne({ username }, {
            $set: {
                picks: [],
                immortalLock: []
            }
        });

        res.json({ success: true, message: 'Picks reset successfully' });
    } catch (error) {
        console.error('Error resetting picks:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

export default router;
