"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../models/user"));
const router = express_1.default.Router();
router.post('/login', (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;
    const user = user_1.default.find(u => u.username === username && u.password === password);
    if (user) {
        res.redirect('/homepage.html'); // This would be the URL to your homepage
    }
    else {
        res.status(401).send('Invalid credentials. Please try again.');
    }
});
exports.default = router;
