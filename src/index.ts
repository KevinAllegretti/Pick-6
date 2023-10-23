import express from 'express';
//import userRoutes from './routes/userRoutes';
import pickRoutes from './routes/pickRoutes';
import leaderboardRoutes from './routes/leaderboardRoutes';


const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Pick 6!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//app.use('/users', userRoutes);

app.use('/picks', pickRoutes);

app.use('/leaderboard', leaderboardRoutes);

