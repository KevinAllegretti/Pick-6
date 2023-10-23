import express from 'express';
import userRoutes from './routes/userRoutes';
import pickRoutes from './routes/pickRoutes';
import leaderboardRoutes from './routes/leaderboardRoutes';

const app = express();
const PORT = 3000;

// Use middleware to parse JSON
app.use(express.json());

// Serve static files
app.use(express.static('public'));  // This serves files from the 'public' directory

app.get('/', (req, res) => {
  res.send('Welcome to Pick 6!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/users', userRoutes);

app.use('/picks', pickRoutes);

app.use('/leaderboard', leaderboardRoutes);

app.use(express.static('public'));
