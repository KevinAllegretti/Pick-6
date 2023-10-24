"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const path_1 = __importDefault(require("path"));
const picksRoutes_1 = __importDefault(require("./routes/picksRoutes")); // Update the path if needed
const body_parser_1 = __importDefault(require("body-parser"));
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
app.use(body_parser_1.default.json());
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});
app.use(express_1.default.urlencoded({ extended: true }));
// Place all your API routes above the static file middleware
app.use('/users', userRoutes_1.default);
app.get('/dashboard', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/dashboard.html'));
});
app.use(picksRoutes_1.default);
// ... previous Express setup and middleware ...
/*
// Add a new pick
app.post('/addPick', async (req, res) => {
  const pickData = req.body;
  try {
    await addPick(pickData);
    res.send('Pick added!');
  } catch (error) {
    res.status(500).send('Error adding pick');
  }
});

// Get picks for a specific user
app.get('/getUserPicks', async (req, res) => {
  const username = req.query.username;
  try {
    const picks = await getPicksByUsername(username);
    res.json(picks);
  } catch (error) {
    res.status(500).send('Error fetching picks');
  }
});
*/
// ... Start your Express server ...
// Serve static files last
app.use(express_1.default.static('public'));
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
