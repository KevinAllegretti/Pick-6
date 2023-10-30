/*import express from 'express';
import userRoutes from './routes/userRoutes';
import path from 'path';
import picksRoutes from './routes/picksRoutes'; // Update the path if needed
import bodyParser from 'body-parser';
import { Request, Response, NextFunction } from 'express';





const app = express();
const PORT = 3000;


// Use middleware to parse JSON
app.use(express.json());



app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome to Pick 6!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(bodyParser.json());
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





// Serve static files last
//app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '../public')));

*/

import express, { Request, Response, NextFunction } from 'express';
import userRoutes from '../src/routes/userRoutes';
import path from 'path';
import picksRoutes from '../src/routes/picksRoutes'; 
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;


// 1. Middleware to parse JSON
app.use(express.json());


// 2. Logging middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// 3. Body parser
app.use(bodyParser.json());

// 4. URL encoded parser
app.use(express.urlencoded({ extended: true }));

// 5. API routes
app.get('/', (req, res) => {
  res.send('Welcome to Pick 6!');
});

app.use('/users', userRoutes);

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dashboard.html'));
});

app.use(picksRoutes);

// 6. Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});