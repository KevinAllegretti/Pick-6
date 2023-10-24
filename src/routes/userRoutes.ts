import express from 'express';
import { connectToDatabase } from '../microservices/connectDB';
import users from '../models/user';

declare module 'express-session' {
    export interface SessionData {
      username?: string; // Add other custom session properties here if needed
    }
  }
  

const router = express.Router();

router.post('/login', (req: express.Request, res: express.Response) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.redirect(`/homepage.html?username=${username}`);
        res.redirect('/homepage.html'); // This would be the URL to your homepage
    } else {
        res.status(401).send('Invalid credentials. Please try again.');
    }
});

router.post('/api/submitPicks', async (req, res) => {
    const { picks } = req.body;

    // Save the picks to MongoDB
    try {
        const db = await connectToDatabase(); // This is your function to connect to MongoDB
        const userPicksCollection = db.collection('userPicks');

        // For simplicity, we're assuming there's a username field to associate with picks
        await userPicksCollection.updateOne({ username: req.session.username }, { $set: { picks } }, { upsert: true });

        res.json({ success: true, message: 'Picks saved successfully.' });
    } catch (error) {
        console.error("Error saving user's picks:", error);
        res.json({ success: false, message: 'Error saving picks. Please try again.' });
    }
});





export default router;
