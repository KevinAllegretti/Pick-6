"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePointsForWeek = void 0;
const picks_1 = __importDefault(require("../models/picks"));
const user_1 = __importDefault(require("../models/user"));
const gamesOutcome_1 = __importDefault(require("../models/gamesOutcome"));
const calculatePointsForWeek = async (week) => {
    const outcomes = await gamesOutcome_1.default.findOne({ week });
    const picksForWeek = await picks_1.default.find({ week });
    picksForWeek.forEach(async (userPicks) => {
        let points = 0;
        userPicks.picks.forEach(async (pick) => {
            const outcomes = await gamesOutcome_1.default.findOne({ week });
            if (!outcomes) {
                throw new Error("No outcomes found for the specified week.");
            }
            // Logic to calculate points based on outcome and pick
            // Update the points variable accordingly
        });
        // Update user's total points
        const user = await user_1.default.findById(userPicks.userId);
        if (!user) {
            throw new Error("User not found!");
        }
        user.totalPoints = (user.totalPoints || 0) + points; // This handles the possibility of totalPoints being undefined
        await user.save();
    });
};
exports.calculatePointsForWeek = calculatePointsForWeek;
