"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const picks_1 = __importDefault(require("../models/picks"));
const router = express_1.default.Router();
router.post('/place-picks', async (req, res) => {
    try {
        const userId = req.body.userId;
        const week = req.body.week;
        const picks = req.body.picks;
        const bonusBet = req.body.bonusBet;
        // Check if user has already placed picks for the week
        const existingPicks = await picks_1.default.findOne({ userId, week });
        if (existingPicks) {
            return res.status(400).send({ error: 'You have already placed your picks for this week.' });
        }
        // TODO: Add validation for placing the same bet as previous week
        // Check for the same bet in the previous week
        const previousWeekPicks = await picks_1.default.findOne({ userId, week: week - 1 });
        if (previousWeekPicks) {
            for (let currentPick of picks) {
                for (let prevPick of previousWeekPicks.picks) {
                    if (currentPick.team === prevPick.team && currentPick.type === prevPick.type) {
                        return res.status(400).send({ error: `You cannot pick ${currentPick.team} with ${currentPick.type} two weeks in a row.` });
                    }
                }
            }
        }
        const newPicks = new picks_1.default({
            userId,
            week,
            picks,
            bonusBet
        });
        await newPicks.save();
        res.status(201).send(newPicks);
    }
    catch (error) {
        res.status(500).send({ error: 'Error placing picks.' });
    }
});
exports.default = router;
