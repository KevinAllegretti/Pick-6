"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = __importDefault(require("../models/user"));
const router = express_1.default.Router();
// Register
router.post('/register', async (req, res) => {
    try {
        const user = new user_1.default(req.body);
        await user.save();
        res.status(201).send(user);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
// Login
// Login
router.post('/login', async (req, res) => {
    try {
        const user = await user_1.default.findOne({ username: req.body.username });
        if (!user) {
            return res.status(401).send({ error: 'Login failed! User not found.' });
        }
        const isPasswordMatch = await bcryptjs_1.default.compare(req.body.password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).send({ error: 'Login failed! Incorrect password.' });
        }
        const token = jsonwebtoken_1.default.sign({ _id: user._id }, 'YOUR_SECRET_KEY'); // Change 'YOUR_SECRET_KEY' to a secret passphrase
        res.send({ user, token });
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.default = router;
