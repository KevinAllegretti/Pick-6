"use strict";
/*import express from 'express';
import { User, IUser } from '../models/user';

const router = express.Router();

router.post('/login', async (req: express.Request, res: express.Response) => {
    const { username } = req.body;
    const user = await User.findOne({ username });

    if (user) {
        return res.status(200).send('Successfully logged in');
    } else {
        return res.status(400).send('Invalid credentials');
    }
});

router.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    const username = req.headers['x-user'];

    if (username) {
        req.user = users.find(u => u.username === username);
        next();
    } else {
        res.status(401).send('Please log in');
    }
});

router.get('/profile', async (req, res) => {
    const username = req.headers['x-user'] as string;  // Get the username from the header

    const user = await User.findOne({ username });
    if (user) {
        // Return the user's data as a response
        res.status(200).json(user);
    } else {
        res.status(404).send('User not found');
    }
});

export default router;
*/ 
