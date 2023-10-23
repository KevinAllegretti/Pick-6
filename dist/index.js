"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
const PORT = 3000;
// Use middleware to parse JSON
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Welcome to Pick 6!');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.use(express_1.default.urlencoded({ extended: true }));
// Place all your API routes above the static file middleware
app.use('/users', userRoutes_1.default);
// Serve static files last
app.use(express_1.default.static('public'));
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});
