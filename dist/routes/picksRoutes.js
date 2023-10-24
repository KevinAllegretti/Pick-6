"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connectDB_1 = require("../microservices/connectDB");
const router = express_1.default.Router();
router.post('/api/savePicks/:username', async (req, res) => {
    try {
        const username = req.params.username;
        // Extract data from request
        const { picks, immortalLock } = req.body;
        // Connect to database and save
        const database = await (0, connectDB_1.connectToDatabase)();
        const picksCollection = database.collection('userPicks');
        // Save to database using username as a reference
        await picksCollection.insertOne({
            username,
            picks,
            immortalLock
        });
        res.json({ success: true });
    }
    catch (error) {
        console.error('Error saving picks:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});
// New route to reset user picks
router.post('/api/resetPicks/:username', async (req, res) => {
    try {
        const username = req.params.username;
        // Connect to the database
        const database = await (0, connectDB_1.connectToDatabase)();
        const picksCollection = database.collection('userPicks');
        // Update the user's picks and immortal lock to empty arrays
        await picksCollection.updateOne({ username }, {
            $set: {
                picks: [],
                immortalLock: []
            }
        });
        res.json({ success: true, message: 'Picks reset successfully' });
    }
    catch (error) {
        console.error('Error resetting picks:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});
exports.default = router;
