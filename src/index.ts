import express from 'express';
import userRoutes from './routes/userRoutes';
import path from 'path';
import picksRoutes from './routes/picksRoutes'; // Update the path if needed


const app = express();
const PORT = 3000;


// Use middleware to parse JSON
app.use(express.json());



app.get('/', (req, res) => {
  res.send('Welcome to Pick 6!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.use(express.urlencoded({ extended: true }));

// Place all your API routes above the static file middleware
app.use('/users', userRoutes);


app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dashboard.html'));
});


app.use(picksRoutes);
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
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '../public')));

