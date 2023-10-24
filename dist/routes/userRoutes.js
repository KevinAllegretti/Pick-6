"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connectDB_1 = require("../microservices/connectDB");
const user_1 = __importDefault(require("../models/user"));
const router = express_1.default.Router();
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = user_1.default.find(u => u.username === username && u.password === password);
    if (user) {
        res.redirect(`/homepage.html?username=${username}`);
        res.redirect('/homepage.html'); // This would be the URL to your homepage
    }
    else {
        res.status(401).send('Invalid credentials. Please try again.');
    }
});
router.post('/api/submitPicks', async (req, res) => {
    const { picks } = req.body;
    // Save the picks to MongoDB
    try {
        const db = await (0, connectDB_1.connectToDatabase)(); // This is your function to connect to MongoDB
        const userPicksCollection = db.collection('userPicks');
        // For simplicity, we're assuming there's a username field to associate with picks
        await userPicksCollection.updateOne({ username: req.session.username }, { $set: { picks } }, { upsert: true });
        res.json({ success: true, message: 'Picks saved successfully.' });
    }
    catch (error) {
        console.error("Error saving user's picks:", error);
        res.json({ success: false, message: 'Error saving picks. Please try again.' });
    }
});
exports.default = router;
