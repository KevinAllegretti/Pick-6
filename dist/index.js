"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./src/routes/userRoutes"));
const pickRoutes_1 = __importDefault(require("./src/routes/pickRoutes"));
const leaderboardRoutes_1 = __importDefault(require("./src/routes/leaderboardRoutes"));
const app = (0, express_1.default)();
const PORT = 3000;
// Use middleware to parse JSON
app.use(express_1.default.json());
// Serve static files
app.use(express_1.default.static('public')); // This serves files from the 'public' directory
app.get('/', (req, res) => {
    res.send('Welcome to Pick 6!');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.use('/users', userRoutes_1.default);
app.use('/picks', pickRoutes_1.default);
app.use('/leaderboard', leaderboardRoutes_1.default);
app.use(express_1.default.static('public'));
