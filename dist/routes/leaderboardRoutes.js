"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../models/user"));
const router = express_1.default.Router();
router.get('/leaderboard', async (req, res) => {
    try {
        const users = await user_1.default.find({}).sort({ totalPoints: -1 });
        res.send(users);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.default = router;
