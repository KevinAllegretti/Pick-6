import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user';

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Login
// Login
router.post('/login', async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      
      if (!user) {
        return res.status(401).send({ error: 'Login failed! User not found.' });
      }
  
      const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isPasswordMatch) {
        return res.status(401).send({ error: 'Login failed! Incorrect password.' });
      }
  
      const token = jwt.sign({ _id: user._id }, 'YOUR_SECRET_KEY');  // Change 'YOUR_SECRET_KEY' to a secret passphrase
      res.send({ user, token });
    } catch (error) {
      res.status(400).send(error);
    }
  });
  

export default router;
