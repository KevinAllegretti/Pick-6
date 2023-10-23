import express from 'express';
import userRoutes from './routes/userRoutes';
import path from 'path';

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

app.use(express.urlencoded({ extended: true }));

// Place all your API routes above the static file middleware
app.use('/users', userRoutes);


app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dashboard.html'));
});


app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});




// Serve static files last
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '../public')));

