import express from 'express';
import users from '../models/user';




const router = express.Router();

router.post('/login', (req: express.Request, res: express.Response) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.redirect('/homepage.html'); // This would be the URL to your homepage
        res.redirect(`/homepage.html?username=${username}`);
    } else {
        res.status(401).send('Invalid credentials. Please try again.');
    }
});





export default router;
